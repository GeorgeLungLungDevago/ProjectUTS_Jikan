const { Staffs } = require('../../../models');

async function addStaffToAnime(staff, animeId) {
  return Staffs.create({ staff, animeId });
}

async function getStaffByAnimeId(id) {
  const anime = await Staffs.findOne({ animeId: id }, 'staff');
  return anime?.staff || null;
}

module.exports = {
  addStaffToAnime,
  getStaffByAnimeId,
};
