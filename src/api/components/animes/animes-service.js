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

async function getEpisodesByAnimeId(id) {
  return await animeRepository.getEpisodesByAnimeId(id);
}

async function getEpisodesByIndex(id, index) {
  return await animeRepository.getEpisodesByIndex(id, index);
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
  getEpisodesByAnimeId,
  getEpisodesByIndex,
  getAnimePictures,
  getAnimeMoreInfo,
  getAnimeRecomendations,
  getAnimeReviews,
  getAnimeThemes,
};
