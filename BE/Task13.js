const express = require("express");

const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
    res.send("Hello World");
})

app.get('/error', (req,res,next)=>{
    const err = new Error("Some thing went wrog....!");
    err.status = 500;
    next(err);  
})

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404; 
    next(err); 
});

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(err.status || 3000).json({
        error:{
            status : "fail",
            message : err.message || "Internal Server Error"
        }
    })
})

app.listen(5000, ()=>{
    console.log("Server runnign....")
})