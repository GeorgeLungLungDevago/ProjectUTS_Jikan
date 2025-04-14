const express = require('express');
const route = express.Router();
const animeController = require('./animes-controller');

module.exports = (app) => {
  app.use('/anime', route);

  //Mendapatkan anime full by id
  route.get('/:id/full', animeController.getFullAnime)

  //Mendapatkan anime by id ( not full )
  route.get('/:id', animeController.getAnimeById)

  route.get('/:id/characters', animeController.getCharactersByAnimeId)
};
