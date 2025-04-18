const { Animes } = require('../../../models');

async function addAnime(animeData) {
  return Animes.create(animeData);
}

async function findById(id) {
  return Animes.findById(id);
}

async function findBasicById(id) {
  return Animes.findById(id).select('title_en title_jp studio status');
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

module.exports = {
  addAnime,
  findById,
  findBasicById,
  getAnimePictures,
  getAnimeMoreInfo,
  getAnimeRecomendations,
  getAnimeReviews,
};
