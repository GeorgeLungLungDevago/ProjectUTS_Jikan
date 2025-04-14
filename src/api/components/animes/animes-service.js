const animeRepository = require('./animes-repository');

async function getFullAnimeById(id) {
  const anime = await animeRepository.findById(id);
  return anime;
}

async function getAnimeById(id) {
  const anime = await animeRepository.findBasicById(id);
  return anime;
}

module.exports = {
  getFullAnimeById,
  getAnimeById,
}