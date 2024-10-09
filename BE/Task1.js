const express = require('express');
const app = express();

// Define the /goodbye route
app.get('/hello', (req, res) => {
    res.send('hello, Express!');
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running.....");
});
