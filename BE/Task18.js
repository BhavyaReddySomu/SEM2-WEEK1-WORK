// server.js

const express = require('express');
const compression = require('compression');

const app = express();

app.use(compression());

app.get('/', (req, res) => {
    const data = 'Hello, World!'.repeat(1000); // Example of a larger response
    res.send(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
