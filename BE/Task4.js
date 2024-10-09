const express = require('express');

const app = express();

app.use(express.json())

app.get('/greet', (req, res) => {
    const name = req.query.name;
    if (!name) {
        return res.status(400).send('Name is required');
    }
    res.send(`Hello, ${name}!`);
});

app.listen(3000,()=>{
    console.log('Server is running...')
});