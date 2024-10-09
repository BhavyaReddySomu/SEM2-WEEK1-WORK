// server.js

const express = require('express');

const app = express();

// Define a GET route that redirects to another URL
app.get('/redirect', (req, res) => {
    // Redirect to a different URL
    res.redirect('https://www.example.com'); 
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
