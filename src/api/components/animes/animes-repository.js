const { Animes } = require('../../../models');
const { Characters } = require('../../../models');
// const { addAnime } = require('./animes-service');

async function addAnime(animeData) {
  return Animes.create(animeData);
}

async function findById(id) {
  return Animes.findById(id);
}

async function findBasicById(id) {
  return Animes.findById(id).select('title_en title_jp studio status');
}

async function getStaffByAnimeId(id) {
  const anime = await Animes.findById(id, 'staff');
  return anime?.staff || null;
}

async function getCharactersByAnimeId(animeId) {
  return Characters.find({ animeId: animeId });
}

async function getAnimePictures(id) {
  return Animes.findById(id).select('image_url');
}

async function getAnimeMoreInfo(id) {
  return Animes.findById(id, 'more_info');
}

async function getAnimeRecomendations(id) {
  return Animes.findById(id, 'recomendation');
}

async function getAnimeReviews(id) {
  return Animes.findById(id, 'reviews');
}

async function getAnimeThemes(id) {
  return Animes.findById(id, 'themes');
}

module.exports = {
  addAnime,
  findById,
  findBasicById,
  getStaffByAnimeId,
  getCharactersByAnimeId,
  getAnimePictures,
  getAnimeMoreInfo,
  getAnimeRecomendations,
  getAnimeReviews,
  getAnimeThemes,
};
