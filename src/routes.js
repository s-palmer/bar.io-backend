const express = require('express');
const app = express();
const BarFinder = require('./bar_finder');
const Client = require('./client');
const Sorter = require('./sorter');

app.get('/bars', async (req, res) => {
  const barFinder = new BarFinder(new Client, new Sorter);
  const coordinates = {x: 51.5173523, y: -0.0754469};
  const walkTime = 15;

  const results = await barFinder.search(coordinates, walkTime);

  res.json({results: results});
});

module.exports = app;
