const express = require('express');
      cors = require('cors'),
      axios = require('axios'),
      app = express(),
      BarFinder = require('./bar_finder'),
      Client = require('./client'),
      Sorter = require('./sorter');

app.use(express.json());

app.post('/bars', cors(), async (req, res) => {
  const barFinder = new BarFinder(new Client, new Sorter),
        results = await barFinder.search(req.body.location, req.body.mins);

  res.send({results: results});
});

module.exports = app;
