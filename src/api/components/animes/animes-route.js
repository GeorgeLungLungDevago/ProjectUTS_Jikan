const express = require('express');
const route = express.Router();
const animeController = require('./animes-controller');

module.exports = (app) => {
  app.use('/anime', route);

  // Menambahkan data anime ke database
  route.post('/', animeController.addAnime);

  // Mendapatkan seluruh query anime (bukan full)
  route.get('/', animeController.getAnimes);

  // Mendapatkan anime full by id
  route.get('/:id/full', animeController.getFullAnime);

  // Mendapatkan anime by id ( not full )
  route.get('/:id', animeController.getAnimeById);

  // Mengembalikan gambar anime (cover anime)
  route.get('/:id/pictures', animeController.getAnimePictures);

  // mendapatkan info anime (genre, studio, etc)
  route.get('/:id/moreinfo', animeController.getAnimeMoreInfo);

  // mendapatkan rekomendasi anime dengan id anime
  route.get('/:id/recomendations', animeController.getAnimeRecomendations);

  // mendapatkan review anime dari id anime
  route.get('/:id/reviews', animeController.getAnimeReviews);
};
