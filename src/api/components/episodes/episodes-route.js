const express = require('express');
// merge params agar id anime dapat diakses melalui req.params masing2 controller
const route = express.Router({ mergeParams: true });
const episodeController = require('./episodes-controller');

module.exports = (app) => {
  // definisikan rute disini untuk docs /characters
  app.use('/anime/:id/episodes', route);

  route.post('/', episodeController.addAnimeEpisode);
};
