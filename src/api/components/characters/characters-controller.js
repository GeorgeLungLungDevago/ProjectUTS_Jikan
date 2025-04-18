const { errorResponder, errorTypes } = require('../../../core/errors');
const characterService = require('./characters-service');

async function addCharactersToAnime(req, res) {
  try {
    const animeId = req.params.id;
    const { name, nicknames, about } = req.body;

    const data = { name, nicknames, about, animeId };

    if (!name) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Character must have a full name!'
      );
    }

    if (!about) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Character must have an about description!'
      );
    }

    const character = await characterService.addCharactersToAnime(data);

    if (!character) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to add character entry'
      );
    }

    return res
      .status(201)
      .json({ message: 'Character added successfully to the database entry' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getCharactersByAnimeId(req, res) {
  try {
    const id = req.params.id;
    const characters = await characterService.getCharactersByAnimeId(id);
    if (!characters || characters.length === 0) {
      return res
        .status(404)
        .json({ message: 'No characters found for this anime' });
    }
    res.json(characters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  addCharactersToAnime,
  getCharactersByAnimeId,
};
