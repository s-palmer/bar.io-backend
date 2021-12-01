const express = require('express');
const app = express();

app.get('/bars', (req, res) => {
  res.json({results: []});
});

module.exports = app;
