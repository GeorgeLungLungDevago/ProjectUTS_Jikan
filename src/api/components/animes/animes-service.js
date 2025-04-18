const animeRepository = require('./animes-repository');

async function addAnime(animeData) {
  return await animeRepository.addAnime(animeData);
}

async function getFullAnimeById(id) {
  return await animeRepository.findById(id);
}

async function getAnimeById(id) {
  return await animeRepository.findBasicById(id);
}

async function getStaffByAnimeId(id) {
  return await animeRepository.getStaffByAnimeId(id);
}

async function getCharactersByAnimeId(AnimeId) {
  return await animeRepository.getCharactersByAnimeId(AnimeId);
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

async function getAnimeThemes(id) {
  return await animeRepository.getAnimeThemes(id);
}

module.exports = {
  addAnime,
  getFullAnimeById,
  getAnimeById,
  getStaffByAnimeId,
  getCharactersByAnimeId,
  getAnimePictures,
  getAnimeMoreInfo,
  getAnimeRecomendations,
  getAnimeReviews,
  getAnimeThemes,
};
