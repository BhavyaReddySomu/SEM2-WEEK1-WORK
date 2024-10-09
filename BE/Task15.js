const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

// Serve the HTML file from the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running.....`);
});
