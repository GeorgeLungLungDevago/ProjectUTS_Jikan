const characterRepository = require('./character-repository');

async function addCharacters(name, nicknames, about) {
  const character = await animeRepository.addAnime(name, nicknames, about);
  return character;
}

module.exports = {
  addCharacters,
};
