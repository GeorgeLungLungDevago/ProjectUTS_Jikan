const episodeRepository = require('./episodes-repository');

async function addAnimeEpisode(episodes, animeId) {
  return await episodeRepository.addAnimeEpisode(episodes, animeId);
}

module.exports = {
  addAnimeEpisode,
};
