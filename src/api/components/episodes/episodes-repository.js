const { Episodes } = require('../../../models');

async function addAnimeEpisode(episodes, animeId) {
  return Episodes.create({ episodes, animeId });
}

async function getEpisodesByAnimeId(animeId) {
  const ep = await Episodes.findOne({ animeId }).select('episodes');
  return ep || null;
}

async function getEpisodesByIndex(animeId, index) {
  const ep = await Episodes.findOne({ animeId });

  // Cek ada tidaknya episode
  if (!ep || !ep.episodes || ep.episodes.length <= index) {
    return null;
  }

  // output sesuai dengan index
  return ep.episodes[index];
}

module.exports = {
  addAnimeEpisode,
  getEpisodesByAnimeId,
  getEpisodesByIndex,
};
