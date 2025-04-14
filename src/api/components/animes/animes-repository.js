const { Animes } = require('../../../models');
const { Characters } = require('../../../models');

async function findById(id) {
  return Animes.findById(id);
};

async function findBasicById(id) {
  return Animes.findById(id).select('title_en title_jp studio status');
};

async function getCharactersByAnimeId(animeId) {
  return Characters.find({ animeId: animeId });
  
}

module.exports = {
  findById,
  findBasicById,
  getCharactersByAnimeId,
}