const characterRepository = require('./character-repository');

async function addCharactersToAnime(characterData) {
  return characterRepository.addCharactersToAnime(characterData);
}

async function getCharactersByAnimeId(AnimeId) {
  return characterRepository.getCharactersByAnimeId(AnimeId);
}

async function getCharacterAnime(id) {
  return characterRepository.getCharacterAnime(id);
}

async function getCharacterVoiceActors(id) {
  return characterRepository.getCharacterVoiceActors(id);
}

async function getCharacterPictures(id) {
  return characterRepository.getCharacterPictures(id);
}

async function searchCharacters(query) {
  return characterRepository.searchCharacters(query);
}

module.exports = {
  addCharactersToAnime,
  getCharactersByAnimeId,
  getCharacterAnime,
  getCharacterPictures,
  getCharacterVoiceActors,
  searchCharacters,
};
