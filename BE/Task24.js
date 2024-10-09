// server.js

const express = require('express');

const app = express();

// Example route
app.get('/api/data', (req, res) => {
    res.json({ message: 'This is some data.' });
});

// Custom 404 error handler for undefined routes
app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found', message: 'The requested resource could not be found.' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
