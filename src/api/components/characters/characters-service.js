const characterRepository = require('./character-repository');

async function addCharactersToAnime(characterData) {
  return await characterRepository.addCharactersToAnime(characterData);
}

module.exports = {
  addCharactersToAnime,
};
