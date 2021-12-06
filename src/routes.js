const express = require('express');
const app = express();
const Client = require('../src/client');

app.get('/bars', async (req, res) => {
  const client = new Client;

  const results = await client.getLocations({x: 51.5173523, y: -0.0754469}, 1600);

  res.send({results: results});
});

module.exports = app;
