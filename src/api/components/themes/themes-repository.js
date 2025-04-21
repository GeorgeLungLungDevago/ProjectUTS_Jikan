const { Themes } = require('../../../models');

async function addThemesToAnime(themes, animeId) {
  return Themes.create({ themes, animeId });
}

async function getAnimeThemes(id) {
  return Themes.findOne({ animeId: id }, 'themes');
}

module.exports = {
  addThemesToAnime,
  getAnimeThemes,
};
