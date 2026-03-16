const axios = require('axios');
const { readJsonBody } = require('../lib/request-utils');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { messages } = await readJsonBody(req);

        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: 'Invalid request. Messages array required.' });
        }

        if (!process.env.OPENAI_API_KEY) {
            return res.status(500).json({ error: 'Server not configured properly. API key missing.' });
        }

        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
                messages,
                max_tokens: parseInt(process.env.MAX_TOKENS || '500', 10),
                temperature: parseFloat(process.env.TEMPERATURE || '0.7')
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        return res.status(200).json(response.data);
    } catch (error) {
        const status = error.response?.status || 500;
        const errorData = error.response?.data || {};

        console.error('OpenAI API Error:', {
            status,
            message: error.message,
            error: errorData
        });

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

        return res.status(status).json({
            error: errorMessage,
            details: process.env.NODE_ENV === 'development' ? errorData : undefined
        });
    }
};