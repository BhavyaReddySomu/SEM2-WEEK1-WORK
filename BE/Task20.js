// server.js

const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define routes
app.post(
    '/api/register',
    [
        body('username').isString().notEmpty().withMessage('Username is required'),
        body('email').isEmail().withMessage('Must be a valid email'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // Handle successful registration logic here
        res.status(201).send('User registered successfully!');
    }
);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
