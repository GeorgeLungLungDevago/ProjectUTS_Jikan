const express = require('express');

const route = express.Router();
const characterController = require('./characters-controller');

module.exports = (app) => {
  // definisikan rute disini untuk docs /characters
  app.use('/characters', route);

  route.get('/', characterController.getAllCharacters);
  route.get('/anime/:animeId', characterController.getCharactersByAnime);
  route.get('/:id/anime', characterController.getCharacterAnime);
  route.get('/:id/voice-actors', characterController.getCharacterVoiceActors);
  route.get('/:id/pictures', characterController.getCharacterPictures);
  route.get('/search', characterController.getCharactersSearch);
};
