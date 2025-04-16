const { errorResponder, errorTypes } = require('../../../core/errors');
const characterService = require('./characters-service');

async function addCharacters(req, res) {
  try {
    const { name, nicknames, about } = req.body;

    const data = { name, nicknames, about };

    if (!name) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Character must have a full name!'
      );
    }

    if (!about) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Character must have an about description!'
      );
    }

    const character = await characterService.addCharacters(data);

    if (!character) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to add character entry'
      );
    }

    return res
      .status(201)
      .json({ message: 'Character added successfully to the database entry' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  addCharacters,
};
