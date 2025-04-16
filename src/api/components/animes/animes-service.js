const animeRepository = require('./animes-repository');
const { urlValidator } = require('../../../utils/url-validator');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function validateEpisodesList(episodes_list) {
  // jika tidak ada daftar episode, misalnya pada kasus anime belum tayang,
  // langsung skip validasi ini, karena pengisian episodes_list opsional
  if (!episodes_list) return;

  if (!Array.isArray(episodes_list)) {
    throw errorResponder(
      errorTypes.VALIDATION_ERROR,
      'episodes_list must be an array of episode objects'
    );
  }

  for (let i = 0; i < episodes_list.length; ++i) {
    const ep = episodes_list[i];
    if (!urlValidator(ep.url)) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Episode ${i + 1} has invalid episode URL!'
      );
    }
    if (!ep.title) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Episode ${i + 1} has invalid or missing title!'
      );
    }
    if (!ep.aired || !(ep.aired instanceof Date)) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Episode ${i + 1} has invalid or missing aired date!'
      );
    }
  }
  return episodes_list;
}

async function validateRequiredField(data) {
  if (
    // judul tidak boleh berupa string kosong (bukan null)
    !data.title_en ||
    data.title_en.trim() === '' ||
    !data.title_jp ||
    data.title_jp.trim() === '' ||
    !data.animeStatus ||
    !data.age_rating ||
    !data.demographics ||
    !Array.isArray(data.genres) ||
    data.genres.length === 0
  ) {
    throw errorResponder(
      errorTypes.VALIDATION_ERROR,
      'Anime entry is invalid or missing one or more required fields:' +
        'title_en, title_jp, status, age_rating, demographics, genres'
    );
  }
}

async function validateImageUrl(imageUrl) {
  const valid = urlValidator(imageUrl);
  if (!valid) {
    throw errorResponder(errorTypes.VALIDATION_ERROR, 'Invalid Image URL!');
  }
  return imageUrl;
}

async function addAnime(
  title_en,
  title_jp,
  episodes,
  studio,
  animeStatus,
  season,
  episodes_list,
  airing_date,
  age_rating,
  demographics,
  genres,
  duration_minutes,
  image_url
) {
  const anime = await animeRepository.addAnime(
    title_en,
    title_jp,
    episodes,
    studio,
    animeStatus,
    season,
    episodes_list,
    airing_date,
    age_rating,
    demographics,
    genres,
    duration_minutes,
    image_url
  );
  return anime;
}

async function getFullAnimeById(id) {
  return await animeRepository.findById(id);
}

async function getAnimeById(id) {
  return await animeRepository.findBasicById(id);
}

async function getStaffByAnimeId(id) {
  return await animeRepository.getStaffByAnimeId(id);
}

async function getEpisodesByAnimeId(id) {
  return await animeRepository.getEpisodesByAnimeId(id);
}

async function getEpisodesByIndex(id, index) {
  return await animeRepository.getEpisodesByIndex(id, index);
}

async function getCharactersByAnimeId(AnimeId) {
  return await animeRepository.getCharactersByAnimeId(AnimeId);
}

async function getAnimePictures(id) {
  return await animeRepository.getAnimePictures(id);
}

async function getAnimeMoreInfo() {
  return await animeRepository.getAnimeMoreInfo();
}

async function getAnimeRecomendations() {
  return await animeRepository.getAnimeRecomendations();
}

async function getAnimeUserUpdates() {
  return await animeRepository.getAnimeUserUpdates();
}

module.exports = {
  validateEpisodesList,
  validateRequiredField,
  validateImageUrl,
  addAnime,
  getFullAnimeById,
  getAnimeById,
  getStaffByAnimeId,
  getEpisodesByAnimeId,
  getEpisodesByIndex,
  getCharactersByAnimeId,
  getAnimePictures,
  getAnimeMoreInfo,
  getAnimeRecomendations,
  getAnimeUserUpdates,
};
