/**
 * Simple Node.js Backend for OpenAI API Proxy
 * This prevents CORS issues when calling OpenAI from the browser
 * 
 * Installation:
 * 1. npm install express axios cors dotenv
 * 2. Create .env file with: OPENAI_API_KEY=sk-your-key
 * 3. Run: node backend.js
 * 4. Update ai-advisor.js to call http://localhost:3000/api/chat
 */

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');
const crypto = require('crypto');
const fs = require('fs/promises');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const ratingsFilePath = path.join(__dirname, 'data', 'ratings.json');
const usersFilePath = path.join(__dirname, 'data', 'users.json');
const authSecret = process.env.AUTH_SECRET || 'nauan-auth-secret';

// Middleware
app.use(cors());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});

async function ensureRatingsStore() {
    await fs.mkdir(path.dirname(ratingsFilePath), { recursive: true });

    try {
        await fs.access(ratingsFilePath);
    } catch {
        await fs.writeFile(ratingsFilePath, '{}', 'utf8');
    }
}

async function ensureUsersStore() {
    await fs.mkdir(path.dirname(usersFilePath), { recursive: true });

    try {
        await fs.access(usersFilePath);
    } catch {
        await fs.writeFile(usersFilePath, '[]', 'utf8');
    }
}

async function readRatingsStore() {
    await ensureRatingsStore();
    const raw = await fs.readFile(ratingsFilePath, 'utf8');
    return raw ? JSON.parse(raw) : {};
}

async function writeRatingsStore(ratings) {
    await ensureRatingsStore();
    await fs.writeFile(ratingsFilePath, JSON.stringify(ratings, null, 2), 'utf8');
}

async function readUsersStore() {
    await ensureUsersStore();
    const raw = await fs.readFile(usersFilePath, 'utf8');
    return raw ? JSON.parse(raw) : [];
}

async function writeUsersStore(users) {
    await ensureUsersStore();
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), 'utf8');
}

function normalizeEmail(email) {
    return String(email || '').trim().toLowerCase();
}

function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
    const iterations = 100000;
    const keylen = 64;
    const digest = 'sha512';
    const hash = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString('hex');

    return {
        salt,
        hash,
        iterations,
        keylen,
        digest
    };
}

function verifyPassword(password, passwordHash) {
    if (!passwordHash?.salt || !passwordHash?.hash) {
        return false;
    }

    const derivedHash = crypto.pbkdf2Sync(
        password,
        passwordHash.salt,
        Number(passwordHash.iterations || 100000),
        Number(passwordHash.keylen || 64),
        passwordHash.digest || 'sha512'
    ).toString('hex');

    return crypto.timingSafeEqual(Buffer.from(derivedHash, 'hex'), Buffer.from(passwordHash.hash, 'hex'));
}

function createAuthToken(user) {
    const payload = {
        sub: user.id,
        email: user.email,
        name: user.name,
        iat: Date.now()
    };
    const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url');
    const signature = crypto.createHmac('sha256', authSecret).update(encodedPayload).digest('base64url');

    return `${encodedPayload}.${signature}`;
}

function verifyAuthToken(token) {
    if (!token || typeof token !== 'string' || !token.includes('.')) {
        return null;
    }

    const [encodedPayload, signature] = token.split('.');
    if (!encodedPayload || !signature) {
        return null;
    }

    const expectedSignature = crypto.createHmac('sha256', authSecret).update(encodedPayload).digest('base64url');
    const actualSignatureBuffer = Buffer.from(signature);
    const expectedSignatureBuffer = Buffer.from(expectedSignature);

    if (actualSignatureBuffer.length !== expectedSignatureBuffer.length) {
        return null;
    }

    if (!crypto.timingSafeEqual(actualSignatureBuffer, expectedSignatureBuffer)) {
        return null;
    }

    try {
        return JSON.parse(Buffer.from(encodedPayload, 'base64url').toString('utf8'));
    } catch {
        return null;
    }
}

function getSafeUser(user) {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt
    };
}

function getBearerToken(req) {
    const authorization = String(req.headers.authorization || '');
    if (!authorization.startsWith('Bearer ')) {
        return '';
    }

    return authorization.slice(7).trim();
}

function summarizeRatings(ratings) {
    return Object.fromEntries(
        Object.entries(ratings).map(([recipeId, details]) => {
            const count = Number(details.count || 0);
            const total = Number(details.total || 0);
            const average = count > 0 ? total / count : 0;

            return [recipeId, {
                average: Number(average.toFixed(1)),
                count
            }];
        })
    );
}

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', apiConfigured: !!process.env.OPENAI_API_KEY });
});

app.get('/api/ratings', async (req, res) => {
    try {
        const ratings = await readRatingsStore();
        res.json({ ratings: summarizeRatings(ratings) });
    } catch (error) {
        console.error('Cannot read ratings store:', error);
        res.status(500).json({ error: 'Cannot read ratings data' });
    }
});

app.get('/api/ratings/:recipeId', async (req, res) => {
    try {
        const ratings = await readRatingsStore();
        const summary = summarizeRatings(ratings);
        const recipeId = String(req.params.recipeId);

        res.json({
            recipeId,
            summary: summary[recipeId] || { average: 0, count: 0 }
        });
    } catch (error) {
        console.error('Cannot read recipe rating:', error);
        res.status(500).json({ error: 'Cannot read recipe rating' });
    }
});

app.post('/api/auth/register', async (req, res) => {
    const { name, email, password } = req.body || {};
    const normalizedName = String(name || '').trim();
    const normalizedEmail = normalizeEmail(email);
    const normalizedPassword = String(password || '');

    if (normalizedName.length < 2) {
        return res.status(400).json({ error: 'Tên phải có ít nhất 2 ký tự' });
    }

    if (!normalizedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
        return res.status(400).json({ error: 'Email không hợp lệ' });
    }

    if (normalizedPassword.length < 6) {
        return res.status(400).json({ error: 'Mật khẩu phải có ít nhất 6 ký tự' });
    }

    try {
        const users = await readUsersStore();
        const existingUser = users.find(user => user.email === normalizedEmail);

        if (existingUser) {
            return res.status(409).json({ error: 'Email đã được sử dụng' });
        }

        const user = {
            id: crypto.randomUUID(),
            name: normalizedName,
            email: normalizedEmail,
            passwordHash: hashPassword(normalizedPassword),
            createdAt: new Date().toISOString()
        };

        users.push(user);
        await writeUsersStore(users);

        const safeUser = getSafeUser(user);
        const token = createAuthToken(safeUser);

        res.status(201).json({
            message: 'Tạo tài khoản thành công',
            token,
            user: safeUser
        });
    } catch (error) {
        console.error('Cannot register user:', error);
        res.status(500).json({ error: 'Không thể tạo tài khoản' });
    }
});

app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body || {};
    const normalizedEmail = normalizeEmail(email);
    const normalizedPassword = String(password || '');

    if (!normalizedEmail || !normalizedPassword) {
        return res.status(400).json({ error: 'Email và mật khẩu là bắt buộc' });
    }

    try {
        const users = await readUsersStore();
        const user = users.find(item => item.email === normalizedEmail);

        if (!user || !verifyPassword(normalizedPassword, user.passwordHash)) {
            return res.status(401).json({ error: 'Thông tin đăng nhập không đúng' });
        }

        const safeUser = getSafeUser(user);
        const token = createAuthToken(safeUser);

        res.json({
            message: 'Đăng nhập thành công',
            token,
            user: safeUser
        });
    } catch (error) {
        console.error('Cannot login user:', error);
        res.status(500).json({ error: 'Không thể đăng nhập' });
    }
});

app.get('/api/auth/me', async (req, res) => {
    const token = getBearerToken(req);
    const payload = verifyAuthToken(token);

    if (!payload?.sub) {
        return res.status(401).json({ error: 'Phiên đăng nhập không hợp lệ' });
    }

    try {
        const users = await readUsersStore();
        const user = users.find(item => item.id === payload.sub);

        if (!user) {
            return res.status(401).json({ error: 'Người dùng không tồn tại' });
        }

        res.json({ user: getSafeUser(user) });
    } catch (error) {
        console.error('Cannot get current user:', error);
        res.status(500).json({ error: 'Không thể lấy thông tin người dùng' });
    }
});

app.post('/api/auth/logout', (req, res) => {
    res.json({ message: 'Đăng xuất thành công' });
});

app.post('/api/ratings', async (req, res) => {
    const { recipeId, rating, clientId } = req.body || {};
    const normalizedRecipeId = String(recipeId || '').trim();
    const numericRating = Number(rating);
    const normalizedClientId = String(clientId || '').trim();

    if (!normalizedRecipeId || !normalizedClientId || !Number.isFinite(numericRating) || numericRating < 1 || numericRating > 5) {
        return res.status(400).json({
            error: 'recipeId, clientId và rating hợp lệ là bắt buộc'
        });
    }

    try {
        const ratings = await readRatingsStore();
        const existing = ratings[normalizedRecipeId] || {
            total: 0,
            count: 0,
            users: {}
        };

        const previousRating = Number(existing.users[normalizedClientId] || 0);
        if (previousRating > 0) {
            existing.total -= previousRating;
        } else {
            existing.count += 1;
        }

        existing.users[normalizedClientId] = numericRating;
        existing.total += numericRating;
        ratings[normalizedRecipeId] = existing;

        await writeRatingsStore(ratings);

        const summary = summarizeRatings(ratings)[normalizedRecipeId] || { average: 0, count: 0 };
        res.json({ recipeId: normalizedRecipeId, summary });
    } catch (error) {
        console.error('Cannot save rating:', error);
        res.status(500).json({ error: 'Cannot save rating' });
    }
});

// OpenAI Proxy Endpoint
app.post('/api/chat', async (req, res) => {
    const { messages } = req.body;

    // Validate request
    if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ 
            error: 'Invalid request. Messages array required.' 
        });
    }

    // Check API key
    if (!process.env.OPENAI_API_KEY) {
        console.error('OPENAI_API_KEY not configured in environment variables');
        return res.status(500).json({ 
            error: 'Server not configured properly. API key missing.' 
        });
    }

    try {
        // Call OpenAI API
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
                messages: messages,
                max_tokens: parseInt(process.env.MAX_TOKENS || '500'),
                temperature: parseFloat(process.env.TEMPERATURE || '0.7')
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        // Return success response
        res.json(response.data);

    } catch (error) {
        // Handle OpenAI API errors
        const status = error.response?.status || 500;
        const errorData = error.response?.data || {};

        console.error('OpenAI API Error:', {
            status: status,
            message: error.message,
            error: errorData
        });

        // Determine error message
        let errorMessage = 'Unknown error occurred';

        if (status === 401) {
            errorMessage = 'API key is invalid or expired';
        } else if (status === 429) {
            errorMessage = 'Rate limit exceeded. Please try again later';
        } else if (status === 500) {
            errorMessage = 'OpenAI service error. Please try again later';
        } else if (error.code === 'ECONNREFUSED') {
            errorMessage = 'Cannot connect to OpenAI API. Check your internet connection';
        }

        res.status(status).json({
            error: errorMessage,
            details: process.env.NODE_ENV === 'development' ? errorData : undefined
        });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ 
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});
app.get("/", (req, res) => {
  res.send("AI backend đang chạy OK");
});
// Start server
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════════════════╗
║  🤖 AI Advisor Backend Server                              ║
║  Server running on http://localhost:${PORT}             ║
║  OpenAI API configured: ${process.env.OPENAI_API_KEY ? '✅' : '❌'}                        ║
╚════════════════════════════════════════════════════════════╝
    `);
});
