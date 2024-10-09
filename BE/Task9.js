const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());


app.post('/submit', (req, res) => {
    const jsonData = req.body; 
   
    console.log(jsonData); 
    res.json({ message: 'Data received', data: jsonData });
});

app.listen(port, () => {
    console.log(`Server is running----`);
});
