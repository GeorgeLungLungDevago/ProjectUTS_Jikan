const { errorResponder, errorTypes } = require('../../../core/errors');
const { urlValidator } = require('../../../utils/url-validator');
const episodeService = require('./episodes-service');

async function validateEpisodesList(episodes) {
  if (!Array.isArray(episodes)) {
    throw errorResponder(
      errorTypes.VALIDATION_ERROR,
      'episodes_list must be an array of episode objects'
    );
  }

  for (let i = 0; i < episodes.length; ++i) {
    const ep = episodes[i];
    if (!(await urlValidator.validateUrl(ep.url))) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Episode ${i + 1} has invalid episode URL!'
      );
    }
    if (!ep.title) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Episode ${i + 1} has invalid or missing title!'
      );
    }
    if (!ep.aired || !(ep.aired instanceof Date)) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Episode ${i + 1} has invalid or missing aired date!'
      );
    }
  }
  return episodes;
}

async function addAnimeEpisode(req, res) {
  try {
    const animeId = req.params.id;
    const { episodes } = req.body;

    await validateEpisodesList(episodes);

    const episode = await episodeService.addAnimeEpisode(episodes, animeId);

    return res
      .status(201)
      .json({ message: 'Episodes added successfully to the database entry' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  addAnimeEpisode,
};
