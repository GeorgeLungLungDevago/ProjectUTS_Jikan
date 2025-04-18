const { errorResponder, errorTypes } = require('../../../core/errors');
const staffService = require('./staffs-service');

async function addStaffToAnime(req, res) {
  try {
    const animeId = req.params.id;
    const { staff } = req.body;

    if (staff && !Array.isArray(staff) && typeof staff !== 'object') {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Staff must be an array of object!'
      );
    }

    const validStaff = await staffService.addStaffToAnime(staff, animeId);

    if (!validStaff) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to add staff entry'
      );
    }

    return res.status(201).json({
      message: "Anime's staff added successfully to the database entry",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  addStaffToAnime,
};
