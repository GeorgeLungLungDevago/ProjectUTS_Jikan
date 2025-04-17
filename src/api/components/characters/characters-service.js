const characterRepository = require('./character-repository');

async function addCharactersToAnime(name, nicknames, about, animeId) {
  const character = await characterRepository.addCharactersToAnime(
    name,
    nicknames,
    about,
    animeId
  );
  return character;
}

module.exports = {
  addCharactersToAnime,
};
