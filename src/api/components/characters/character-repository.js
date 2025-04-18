const { Characters } = require('../../../models');

async function addCharactersToAnime(characterData) {
  return Characters.create(characterData);
}

async function getCharactersByAnimeId(animeId) {
  return Characters.find({ animeId: animeId });
}

module.exports = {
  addCharactersToAnime,
  getCharactersByAnimeId,
};
