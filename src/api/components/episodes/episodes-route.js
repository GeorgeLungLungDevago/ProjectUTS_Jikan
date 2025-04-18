const express = require('express');
// merge params agar id anime dapat diakses melalui req.params masing2 controller
const route = express.Router({ mergeParams: true });
const episodeController = require('./episodes-controller');

module.exports = (app) => {
  // definisikan rute disini untuk docs /characters
  app.use('/anime/:id/episodes', route);

  // Menambahkan data episode ke database
  route.post('/', episodeController.addAnimeEpisode);

  // Mendapatkan info episode (title, episode ke brp, dan airing date) melalui id anime
  route.get('/', episodeController.getEpisodesByAnimeId);

  // Mendapatkan info untuk satu episode melalui index episode dan id anime
  route.get('/:episode', episodeController.getEpisodesByIndex);
};
