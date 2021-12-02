const express = require('express');
const app = express();
const client = require('../src/client');

app.get('/bars', (req, res) => {
  const client = new Client;

  res.json(client.getLocations({x: 1234556, y: 1234556}, 1600));
});

module.exports = app;
