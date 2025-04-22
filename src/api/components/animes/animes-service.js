const animeRepository = require('./animes-repository');

async function addAnime(animeData) {
  return await animeRepository.addAnime(animeData);
}

async function getAnimes(page, limit) {
  return await animeRepository.getAnimes(page, limit);
}

async function getFullAnimeById(id) {
  return await animeRepository.findById(id);
}

async function getAnimeById(id) {
  return await animeRepository.findBasicById(id);
}

async function getAnimePictures(id) {
  return await animeRepository.getAnimePictures(id);
}

async function getAnimeMoreInfo(id) {
  return await animeRepository.getAnimeMoreInfo(id);
}

async function getAnimeRecomendations(id) {
  return await animeRepository.getAnimeRecomendations(id);
}

async function getAnimeReviews(id) {
  return await animeRepository.getAnimeReviews(id);
}

async function getRandomAnime() {
  return await animeRepository.getRandomAnime();
}

module.exports = {
  addAnime,
  getAnimes,
  getFullAnimeById,
  getAnimeById,
  getAnimePictures,
  getAnimeMoreInfo,
  getAnimeRecomendations,
  getAnimeReviews,
  getRandomAnime,
};
