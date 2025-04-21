const themesRepository = require('./themes-repository');

async function addThemesToAnime(themes, animeId) {
  return await themesRepository.addThemesToAnime(themes, animeId);
}

async function getAnimeThemes(id) {
  return await themesRepository.getAnimeThemes(id);
}

module.exports = {
  addThemesToAnime,
  getAnimeThemes,
};
