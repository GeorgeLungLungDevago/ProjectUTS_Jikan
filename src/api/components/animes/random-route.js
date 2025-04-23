const express = require('express');
const route = express.Router();
const animeController = require('./animes-controller');

module.exports = (app) => {
  app.use('/random', route);

  // mengembalikan query satu anime secara acak
  route.get('/anime', animeController.getRandomAnime);
};
