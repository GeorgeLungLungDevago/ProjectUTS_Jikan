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
  const anime = await animeRepository.findById(id);
  return anime;
}

async function getAnimeById(id) {
  const anime = await animeRepository.findBasicById(id);
  return anime;
}

async function getCharactersByAnimeId(AnimeId) {
  return await animeRepository.getCharactersByAnimeId(AnimeId);
}

async function getAnimePictures(id) {
  return await animeRepository.getAnimePictures(id);
}

module.exports = {
  addAnime,
  getFullAnimeById,
  getAnimeById,
  getCharactersByAnimeId,
  getAnimePictures,
};
