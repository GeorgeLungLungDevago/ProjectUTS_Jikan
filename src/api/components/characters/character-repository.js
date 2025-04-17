const { Characters } = require('../../../models');

async function addCharactersToAnime(name, nicknames, about, animeId) {
  return Characters.addCharactersToAnime(name, nicknames, about, animeId);
}

module.exports = {
  addCharactersToAnime,
};
