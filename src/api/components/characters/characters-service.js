const characterRepository = require('./character-repository');

async function getCharacterByAnimeId(animeId) {
  return await characterRepository.getCharacterByAnimeId(animeId);
}

module.exports = {
  getCharacterByAnimeId,
}