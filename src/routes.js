const express = require('express');
const app = express();

app.get('/bars', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
