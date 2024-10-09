const express = require('express');
const app = express();
const port = 3000;

// Define the /greet/:name route
app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`); 
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running..`);
});
