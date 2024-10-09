const express = require('express');
const app = express();
const port = 3000;

// Middleware to log request method and URL
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); 
});

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running----`);
});
