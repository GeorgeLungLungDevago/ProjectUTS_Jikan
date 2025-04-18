const episodeRepository = require('./episodes-repository');

async function addAnimeEpisode(episodes, animeId) {
  return await episodeRepository.addAnimeEpisode(episodes, animeId);
}

async function getEpisodesByAnimeId(id) {
  return await episodeRepository.getEpisodesByAnimeId(id);
}

async function getEpisodesByIndex(animeId, index) {
  return await episodeRepository.getEpisodesByIndex(animeId, index);
}

module.exports = {
  addAnimeEpisode,
  getEpisodesByAnimeId,
  getEpisodesByIndex,
};
