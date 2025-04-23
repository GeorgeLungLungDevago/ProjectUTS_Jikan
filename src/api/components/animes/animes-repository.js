const { get } = require('mongoose');
const { Animes } = require('../../../models');
const { Episodes } = require('../../../models');
const { Themes } = require('../../../models');

async function addAnime(animeData) {
  return Animes.create(animeData);
}

async function findById(id) {
  const animes = await Animes.findById(id);
  const episodes = await Episodes.findById(id);
  const themes = await Themes.findById(id);
  return { animes, episodes, themes };
}

async function getAnimes(page, limit) {
  // fungsi pagination menggunakan aggregate mongodb
  return Animes.aggregate([
    { $match: {} },
    { $skip: (page - 1) * limit },
    { $limit: limit },
    {
      $project: {
        // gunakan project untuk SELECT jika menggunakan aggregate mongodb
        title_en: 1, // 1 untuk include sebuah field
        title_jp: 1,
        studio: 1,
        status: 1,
        airing_date: 1,
        genres: 1,
        demographics: 1,
      },
    },
  ]);
}

async function findBasicById(id) {
  return Animes.findById(id).select(
    'title_en title_jp studio status airing_date genres demographics'
  );
}

async function getAnimePictures(id) {
  return Animes.findById(id).select('image_url');
}

async function getAnimeMoreInfo(id) {
  return Animes.findById(id, 'more_info');
}

async function getAnimeRecomendations(id) {
  return Animes.findById(id, 'recomendation');
}

async function getAnimeReviews(id) {
  return Animes.findById(id, 'reviews');
}

async function getRandomAnime() {
  // menggunakan $sample untuk mendapatkan satu data acak
  // set size = 1 untuk mendapatkan satu data acak
  // https://stackoverflow.com/questions/2824157/how-can-i-get-a-random-record-from-mongodb
  return Animes.aggregate([{ $sample: { size: 1 } }]);
}

module.exports = {
  addAnime,
  getAnimes,
  findById,
  findBasicById,
  getAnimePictures,
  getAnimeMoreInfo,
  getAnimeRecomendations,
  getAnimeReviews,
  getRandomAnime,
};
