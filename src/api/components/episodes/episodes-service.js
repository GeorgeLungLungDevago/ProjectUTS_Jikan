const episodeRepository = require('./episodes-repository');

async function addAnimeEpisode(episodes, animeId) {
  const episode = await episodeRepository.addAnimeEpisode(episodes, animeId);
  return episode;
}

module.exports = {
  addAnimeEpisode,
};
