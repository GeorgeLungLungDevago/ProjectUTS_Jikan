const { Staffs } = require('../../../models');

async function addStaffToAnime(staff, animeId) {
  return Staffs.addStaffToAnime(staff, animeId);
}

module.exports = {
  addStaffToAnime,
};
