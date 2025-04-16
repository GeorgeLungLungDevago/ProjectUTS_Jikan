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
  duration_minutes
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
    duration_minutes
  );
}

async function findById(id) {
  return Animes.findById(id);
}

async function findBasicById(id) {
  return Animes.findById(id).select('title_en title_jp studio status');
}

async function getStaffByAnimeId(id) {
  const anime = await Animes.findById(id, 'staff');
  return anime?.staff || null;
}

async function getEpisodesByAnimeId(id) {
  const anime = await Animes.findById(id, 'episodes_list')
  return anime || null;
}

async function getEpisodesByIndex(id, index) {
  const anime = await Animes.findById(id).select('title_en episodes airing_date')
  if (!anime || !anime.episodes || anime.episodes.lenght < index) { //Menentukan adanya episode atau tidak
    return null;
  }
  return {
    title_en: anime.title_en,
    episode: anime.episodes[index],
    airing_date: anime.airing_date,
  }
}

async function getCharactersByAnimeId(animeId) {
  return Characters.find({ animeId: animeId });
}

async function getAnimePictures() {
  return Animes.getAnimePictures();
}

async function getAnimeMoreInfo(){
  return Animes.getAnimeMoreInfo();
}

async function getAnimeRecomendations(){
  return Animes.getAnimeRecomendations();
}

module.exports = {
  addAnime,
  findById,
  findBasicById,
  getStaffByAnimeId,
  getEpisodesByAnimeId,
  getEpisodesByIndex,
  getCharactersByAnimeId,
  getAnimePictures,
  getAnimeMoreInfo,
  getAnimeRecomendations
};
