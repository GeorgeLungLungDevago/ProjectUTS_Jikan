const staffsRepository = require('./staffs-repository');

async function addStaffToAnime(staff, animeId) {
  return await staffsRepository.addStaffToAnime(staff, animeId);
}

module.exports = {
  addStaffToAnime,
};
