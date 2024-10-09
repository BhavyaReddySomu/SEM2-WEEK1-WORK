// server.js

const express = require('express');

const app = express();

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.post('/api/submit', (req, res) => {
   
    const { username, email } = req.body;

    res.send(`Received username: ${username} and email: ${email}`);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
