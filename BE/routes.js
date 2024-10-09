const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
  res.send('Hello, Express!');
});

router.get('/home', (req, res) => {
  res.send('Welcome to my home page!');
});