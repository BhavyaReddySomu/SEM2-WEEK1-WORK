const express = require('express');
const app = express();
const port = 3000;

// Define the /delete/:id route
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id; 
    
// Respond with a confirmation message
    res.send(`Deleted item with ID: ${id}`);
});

app.listen(port, () => {
    console.log(`Server is running-----`);
});
