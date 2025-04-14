const express = require('express');
const route = express.Router();
const animeController = require('./animes-controller');

module.exports = (app) => {
  app.use('/animes', route);

  //Mendapatkan anime full by id
  route.get('/anime/:id/full', animeController.getFullAnime);

  //Mendapatkan anime by id ( not full )
  route.get('/anime/:id', animeController.getAnimeById)
};
