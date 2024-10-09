// server.js

const express = require('express');

const app = express();

// Define a GET route that responds with a JSON object
app.get('/api/data', (req, res) => {
    const responseData = {
        message: 'Hello, World!',
        status: 'success',
        data: {
            username: 'user1',
            email: 'user1@example.com'
        }
    };
    
    res.json(responseData); // Send JSON response
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
