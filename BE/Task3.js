const express = require("express");

const app = express();

app.use(express.json());

app.post('/echo', (req,res)=>{
    const info = req.body;
    console.log(info);
    res.send("Success!!");
})

app.listen(3000, ()=>{
    console.log("Server is runnig....");
})