const express = require('express');

const route = express.Router();
const characterController = require('./characters-controller');

module.exports = (app) => {
  app.use('/characters', route);

  // Create new character
  route.post('/', characterController.createCharacter);

  // Get all characters
  route.get('/', characterController.getAllCharacters);

  // Get character by ID
  route.get('/:id', characterController.getCharacterById);

  // Delete character by ID 
  route.delete('/:id', characterController.deleteCharacter);
};
