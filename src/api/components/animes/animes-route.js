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

  //Mendapatkan info staff melalui id anime
  route.get('/:id/staff', animeController.getStaffByAnimeId);

  //Mendapatkan info episode (title, episode ke brp, dan airing date) melalui id anime
  route.get('/:id/episodes', animeController.getEpisodesByAnimeId);

  //Mendapatkan info untuk satu episode melalui index episode dan id anime
  route.get('/:id/episodes/:episode', animeController.getEpisodesByIndex);

  //Mendapatkan karakter anime dari id anime
  route.get('/:id/characters', animeController.getCharactersByAnimeId);

  //Mengembalikan gambar anime (cover anime)
  route.get('/:id/pictures', animeController.getAnimePictures);

  //mendapatkan info anime (genre, studio, etc)
  route.get('/:id/moreinfo', animeController.getAnimeMoreInfo);

  //mendapatkan rekomendasi anime dari id anime
  route.get('/:id/recomendations', animeController.getAnimeRecomendations);

};
