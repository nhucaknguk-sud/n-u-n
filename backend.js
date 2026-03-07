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

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', apiConfigured: !!process.env.OPENAI_API_KEY });
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
