const animeRepository = require('./animes-repository');

async function getFullAnimeById(id) {
  const anime = await animeRepository.findById(id);
  return anime;
}

async function getAnimeById(id) {
  const anime = await animeRepository.findBasicById(id);
  return anime;
}

async function getCharactersByAnimeId(AnimeId) {
  return await animeRepository.getCharactersByAnimeId(AnimeId);
}

module.exports = {
  getFullAnimeById,
  getAnimeById,
  getCharactersByAnimeId,
}