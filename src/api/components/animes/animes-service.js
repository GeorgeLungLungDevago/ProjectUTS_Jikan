const animeRepository = require('./animes-repository');

async function addAnime(
  title_en,
  title_jp,
  episodes,
  studio,
  status,
  season,
  airing_date,
  age_rating,
  demographics,
  genres,
  duration_minutes
) {
  const anime = await animeRepository.addAnime(
    title_en,
    title_jp,
    episodes,
    studio,
    status,
    season,
    airing_date,
    age_rating,
    demographics,
    genres,
    duration_minutes
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

module.exports = {
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
};
