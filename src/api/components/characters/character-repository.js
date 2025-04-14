const { Characters } = require('../../../models');

async function getCharacterByAnimeId(animeId) {
  return await Characters.find({animeId: animeId});
}

module.exports = {
  getCharacterByAnimeId,
}