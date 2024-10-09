const express = require('express');
const app = express();

// Define the /goodbye route
app.get('/goodbye', (req, res) => {
    res.send('Goodbye, Express!');
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running.....");
});
