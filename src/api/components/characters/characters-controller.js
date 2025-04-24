const { errorResponder, errorTypes } = require('../../../core/errors');
const characterService = require('./characters-service');
const logger = require('../../../core/logger')('characters');

async function createCharacter(req, res) {
  try {
    const { name, nicknames, about, animeId } = req.body;

    if (!name) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Character must have a name!'
      );
    }

    const data = { 
      name, 
      nicknames: nicknames || [], 
      about,
      animeId 
    };

    const character = await characterService.createCharacter(data);

    if (!character) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create character'
      );
    }

    return res.status(201).json({
      message: 'Character created successfully',
      character,
    });
  } catch (error) {
    logger.error(error);
    return res.status(error.status || 500).json({ 
      message: error.message || 'Server error',
    });
  }
}

async function getCharactersByAnimeId(req, res) {
  try {
    const { id } = req.params;
    const characters = await characterService.getCharactersByAnimeId(id);

    if (!characters || characters.length === 0) {
      return res.status(404).json({
        message: 'No characters found for this anime',
      });
    }

    return res.json(characters);
  } catch (error) {
    logger.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

async function getAllCharacters(req, res) {
  try {
    const characters = await characterService.getAllCharacters();
    
    if (!characters || characters.length === 0) {
      return res.status(404).json({ 
        message: 'No characters found',
      });
    }
    
    return res.json(characters);
  } catch (error) {
    logger.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

async function getCharacterById(req, res) {
  try {
    const { id } = req.params;
    const character = await characterService.getCharacterById(id);
    
    if (!character) {
      return res.status(404).json({ 
        message: 'Character not found',
      });
    }
    
    return res.json(character);
  } catch (error) {
    logger.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

async function deleteCharacter(req, res) {
  try {
    const { id } = req.params;
    const character = await characterService.deleteCharacter(id);
    
    if (!character) {
      return res.status(404).json({ 
        message: 'Character not found',
      });
    }
    
    return res.json({ 
      message: 'Character deleted successfully',
      character,
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  createCharacter,
  getCharactersByAnimeId,
  getAllCharacters,
  getCharacterById,
  deleteCharacter,
};
