const express = require('express');
const route = express.Router();
const characterController = require('./characters-controller');

module.exports = (app) => {
  app.use('/anime/:id/characters', route);

  route.post('/', characterController.addCharactersToAnime);
};
