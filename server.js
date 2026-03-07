/**
 * Simple Web Server to serve the AI Advisor website
 * Run: node server.js
 * Access: http://localhost:8080
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════════════════╗
║  🥘 Nấu Ăn Việt - AI Advisor Website                       ║
║  Server running on http://localhost:${PORT === 8080 ? '8080' : PORT}                        ║
║  Backend (Port 3000) is also running                       ║
╚════════════════════════════════════════════════════════════╝

👉 Open your browser and go to: http://localhost:${PORT}
    `);
});
