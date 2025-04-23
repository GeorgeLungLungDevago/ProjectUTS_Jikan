const express = require('express');
const Character = require('../../../models/characters-schema');

module.exports = (app) => {
  const router = express.Router();

  // GET all characters
  router.get('/', async (req, res) => {
    try {
      const characters = await Character.find();
      res.status(200).json(characters);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // GET character by ID
  router.get('/:id', async (req, res) => {
    try {
      const character = await Character.findById(req.params.id);
      if (!character) {
        return res.status(404).json({ message: 'Character not found' });
      }
      res.status(200).json(character);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // POST new character
  router.post('/', async (req, res) => {
    try {
      const newCharacter = await Character.create(req.body);
      res.status(201).json(newCharacter);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  // PUT update character
  router.put('/:id', async (req, res) => {
    try {
      const updatedCharacter = await Character.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedCharacter) {
        return res.status(404).json({ message: 'Character not found' });
      }
      res.status(200).json(updatedCharacter);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  // DELETE character
  router.delete('/:id', async (req, res) => {
    try {
      const deletedCharacter = await Character.findByIdAndDelete(req.params.id);
      if (!deletedCharacter) {
        return res.status(404).json({ message: 'Character not found' });
      }
      res.status(200).json({ message: 'Character deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.use('/characters', router);
};
