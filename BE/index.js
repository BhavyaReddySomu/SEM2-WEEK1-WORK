const express = require('express');

const app = express();

app.use(express.json())

app.get('/hello',(req,res)=>{
    res.send("Hello, Express!");
});

app.listen(3000,()=>{
    console.log('Server is running...')
});