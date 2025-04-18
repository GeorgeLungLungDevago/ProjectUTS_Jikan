const { Animes } = require('../../../models');

async function addAnime(animeData) {
  return Animes.create(animeData);
}

async function findById(id) {
  return Animes.findById(id);
}

async function findBasicById(id) {
  return Animes.findById(id).select('title_en title_jp studio status');
}

async function getEpisodesByAnimeId(id) {
  const anime = await Episodes.findOne({ animeId: id }, 'episodes_list');
  return anime || null;
}

async function getEpisodesByIndex(id, index) {
  const anime = await Animes.findById(id).select(
    'title_en episodes airing_date'
  );
  if (!anime || !anime.episodes || anime.episodes.length < index) {
    //Menentukan adanya episode atau tidak
    return null;
  }
  return {
    title_en: anime.title_en,
    episode: anime.episodes[index],
    airing_date: anime.airing_date,
  };
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

async function getAnimeThemes(id) {
  return Animes.findById(id, 'themes');
}

module.exports = {
  addAnime,
  findById,
  findBasicById,
  getEpisodesByAnimeId,
  getEpisodesByIndex,
  getAnimePictures,
  getAnimeMoreInfo,
  getAnimeRecomendations,
  getAnimeReviews,
  getAnimeThemes,
};
