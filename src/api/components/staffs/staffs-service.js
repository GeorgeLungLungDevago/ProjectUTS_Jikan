const staffsRepository = require('./staffs-repository');

async function addStaffToAnime(staff, animeId) {
  const validStaff = await staffsRepository.addStaffToAnime(staff, animeId);
  return validStaff;
}

module.exports = {
  addStaffToAnime,
};
