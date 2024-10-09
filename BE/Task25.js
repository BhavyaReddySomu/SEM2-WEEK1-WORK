// server.js

const express = require('express');

const app = express();

// Example route that sends a specific status code and message
app.get('/api/success', (req, res) => {
    res.status(200).send({ message: 'Success! Everything is working.' }); // 200 OK
});

app.get('/api/not-found', (req, res) => {
    res.status(404).send({ error: 'Not Found', message: 'The requested resource could not be found.' }); // 404 Not Found
});

app.get('/api/error', (req, res) => {
    res.status(500).send({ error: 'Internal Server Error', message: 'Something went wrong on the server.' }); // 500 Internal Server Error
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
