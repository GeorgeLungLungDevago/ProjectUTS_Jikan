const characterRepository = require('./character-repository');

async function addCharactersToAnime(characterData) {
  return await characterRepository.addCharactersToAnime(characterData);
}

async function getCharactersByAnimeId(AnimeId) {
  return await characterRepository.getCharactersByAnimeId(AnimeId);
}

module.exports = {
  addCharactersToAnime,
  getCharactersByAnimeId,
};
