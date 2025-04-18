const staffsRepository = require('./staffs-repository');

async function addStaffToAnime(staff, animeId) {
  return await staffsRepository.addStaffToAnime(staff, animeId);
}

async function getStaffByAnimeId(id) {
  return await staffsRepository.getStaffByAnimeId(id);
}

module.exports = {
  addStaffToAnime,
  getStaffByAnimeId,
};
