const { Characters } = require('../../../models');

async function createCharacter(characterData) {
  return Characters.create(characterData);
}

async function getCharactersByAnimeId(animeId) {
  return Characters.find({ animeId });
}

async function getAllCharacters() {
  return Characters.find({});
}

async function getCharacterById(id) {
  return Characters.findById(id);
}

async function deleteCharacter(id) {
  return Characters.findByIdAndDelete(id);
}

module.exports = {
  createCharacter,
  getCharactersByAnimeId,
  getAllCharacters,
  getCharacterById,
  deleteCharacter,
};
