const express = require('express');
// merge params agar id anime dapat diakses melalui req.params masing2 controller
const route = express.Router({ mergeParams: true });
const characterController = require('./characters-controller');

module.exports = (app) => {
  app.use('/anime/:id/characters', route);

  route.post('/', characterController.addCharactersToAnime);

  //Mendapatkan karakter anime dari id anime
  route.get('/', characterController.getCharactersByAnimeId);
};
