const express = require('express');
const route = express.Router();
const animeController = require('./animes-controller');

module.exports = (app) => {
  app.use('/anime', route);

  //Menambahkan data anime ke database
  route.post('/', animeController.addAnime);

  //Mendapatkan anime full by id
  route.get('/:id/full', animeController.getFullAnime);

  //Mendapatkan anime by id ( not full )
  route.get('/:id', animeController.getAnimeById);

  //Mendapatkan karakter anime dari id anime
  route.get('/:id/characters', animeController.getCharactersByAnimeId);

  //Mengembalikan gambar anime (cover anime)
  route.get('/:id/pictures', animeController.getAnimePictures);
};
