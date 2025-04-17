const { Episodes } = require('../../../models');

async function addAnimeEpisode(episodes, animeId) {
  return Episodes.addAnimeEpisode(episodes, animeId);
}
module.exports = {
  addAnimeEpisode,
};
