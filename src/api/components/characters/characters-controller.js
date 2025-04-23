const { errorResponder, errorTypes } = require('../../../core/errors');
const characterService = require('./characters-service');

async function addCharactersToAnime(req, res) {
  try {
    const animeId = req.params.id;
    const { name, nicknames, about } = req.body;

    if (!name || !about) {
      return res.status(400).json({ message: 'Name and about are required' });
    }

    const data = { name, nicknames, about, animeId };
    const character = await characterService.addCharactersToAnime(data);

    if (!character) {
      return res.status(422).json({ message: 'Failed to add character' });
    }

    res.status(201).json({ message: 'Character added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

// GET semua karakter
async function getAllCharacters(req, res) {
  try {
    const characters = await characterService.getAllCharacters();
    res.status(200).json(characters);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch characters' });
  }
}

// GET karakter berdasarkan animeId
async function getCharactersByAnime(req, res) {
  try {
    const { animeId } = req.params;
    const characters = await characterService.getCharactersByAnime(animeId);

    if (!characters || characters.length === 0) {
      return res
        .status(404)
        .json({ message: 'No characters found for this anime' });
    }

    res.status(200).json(characters);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

// GET karakter.anime
async function getCharacterAnime(req, res) {
  try {
    const { id } = req.params;
    const character = await Characters.findById(id);
    if (!character)
      return res.status(404).json({ message: 'Character not found' });
    res.status(200).json(character.anime);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

// GET karakter.voice_actors
async function getCharacterVoiceActors(req, res) {
  try {
    const { id } = req.params;
    const character = await Characters.findById(id);
    if (!character)
      return res.status(404).json({ message: 'Character not found' });
    res.status(200).json(character.voice_actors);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

// GET karakter.pictures
async function getCharacterPictures(req, res) {
  try {
    const { id } = req.params;
    const character = await Characters.findById(id);
    if (!character)
      return res.status(404).json({ message: 'Character not found' });
    res.status(200).json(character.pictures);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

// SEARCH karakter
async function getCharactersSearch(req, res) {
  try {
    const { q } = req.query;
    const regex = new RegExp(q, 'i');
    const characters = await Characters.find({
      $or: [{ name: regex }, { nicknames: regex }],
    });
    res.status(200).json(characters);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

async function getCharactersByAnimeId(req, res) {
  try {
    const id = req.params;
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
  getAllCharacters,
  getCharactersByAnime,
  getCharacterAnime,
  getCharacterVoiceActors,
  getCharacterPictures,
  getCharactersSearch,
};
