const { Characters } = require('../../../models');

async function addCharactersToAnime(characterData) {
  return Characters.create(characterData);
}

module.exports = {
  addCharactersToAnime,
};
