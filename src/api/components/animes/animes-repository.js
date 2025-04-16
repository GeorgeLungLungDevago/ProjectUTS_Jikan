const { Animes } = require('../../../models');
const { Characters } = require('../../../models');
const { addAnime } = require('./animes-service');

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
  duration_minutes,
  image_url
) {
  return Animes.addAnime(
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
    duration_minutes,
    image_url
  );
}

async function findById(id) {
  return Animes.findById(id);
}

async function findBasicById(id) {
  return Animes.findById(id).select('title_en title_jp studio status');
}

async function getCharactersByAnimeId(animeId) {
  return Characters.find({ animeId: animeId });
}

async function getAnimePictures(id) {
  return Animes.findById(id).select('image_url');
}

async function getAnimeMoreInfo() {
  return Animes.getAnimeMoreInfo();
}

async function getAnimeRecomendations() {
  return Animes.getAnimeRecomendations();
}

module.exports = {
  addAnime,
  findById,
  findBasicById,
  getCharactersByAnimeId,
  getAnimePictures,
  getAnimeMoreInfo,
  getAnimeRecomendations,
};
