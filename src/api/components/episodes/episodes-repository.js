const { Episodes } = require('../../../models');

async function addAnimeEpisode(episodes, animeId) {
  return Episodes.create({ episodes, animeId });
}
module.exports = {
  addAnimeEpisode,
};
