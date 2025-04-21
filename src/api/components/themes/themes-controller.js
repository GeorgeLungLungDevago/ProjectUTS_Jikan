const { errorResponder, errorTypes } = require('../../../core/errors');
const { validateUrlArray } = require('../../../utils/url-validator');
const themeService = require('./themes-service');

async function addThemesToAnime(req, res) {
  try {
    const animeId = req.params.id;
    const { themes } = req.body;

    if (themes && !Array.isArray(themes) && typeof themes !== 'object') {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Themes must be an array of object!'
      );
    }

    await validateUrlArray(themes.opening);
    await validateUrlArray(themes.ending);

    const validThemes = await themeService.addThemesToAnime(themes, animeId);

    if (!validThemes) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to add themes entry'
      );
    }

    return res.status(201).json({
      message: "Anime's Themes added successfully to the database entry",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getAnimeThemes(req, res) {
  try {
    const id = req.params.id;
    const themes = await themeService.getAnimeThemes(id);
    if (!themes) {
      return res.status(404).json({ message: 'Anime not found' });
    }
    res.json(themes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  addThemesToAnime,
  getAnimeThemes,
};
