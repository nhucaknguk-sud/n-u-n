const crypto = require('crypto');

const authSecret = process.env.AUTH_SECRET || 'nauan-auth-secret';

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
    const authorization = String(req.headers?.authorization || '');
    if (!authorization.startsWith('Bearer ')) {
        return '';
    }

    return authorization.slice(7).trim();
}

function createUserRecord({ name, email, password }) {
    return {
        id: crypto.randomUUID(),
        name: String(name || '').trim(),
        email: normalizeEmail(email),
        passwordHash: hashPassword(String(password || '')),
        createdAt: new Date().toISOString()
    };
}

module.exports = {
    createAuthToken,
    createUserRecord,
    getBearerToken,
    getSafeUser,
    normalizeEmail,
    verifyAuthToken,
    verifyPassword
};