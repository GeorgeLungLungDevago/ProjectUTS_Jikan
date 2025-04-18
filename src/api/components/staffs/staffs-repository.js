const { Staffs } = require('../../../models');

async function addStaffToAnime(staff, animeId) {
  return Staffs.create({ staff, animeId });
}

module.exports = {
  addStaffToAnime,
};
