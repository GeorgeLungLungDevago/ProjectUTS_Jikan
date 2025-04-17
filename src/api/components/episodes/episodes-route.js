const express = require('express');
const route = express.Router();
const episodeController = require('./episodes-controller');

module.exports = (app) => {
  // definisikan rute disini untuk docs /characters
  app.use('/anime/:id/episodes', route);

  route.post('/', episodeController.addAnimeEpisode);
};
