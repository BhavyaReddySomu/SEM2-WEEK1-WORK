const express = require('express');
const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// Create a PUT route at /update
app.put('/update', (req, res) => {
    console.log(req.body); // Log the received JSON data
    res.send('Data updated');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});