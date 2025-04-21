const { errorResponder, errorTypes } = require('../../../core/errors');
const { validateUrlReq } = require('../../../utils/url-validator');
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
    if (!(await validateUrlReq(ep.url))) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        `Episode ${i + 1} has invalid episode URL!`
      );
    }
    if (!ep.title) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        `Episode ${i + 1} has invalid or missing title!`
      );
    }
    if (!ep.aired || isNaN(Date.parse(ep.aired))) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        `Episode ${i + 1} has invalid or missing airing date!`
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

    if (!episode) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to add episodes entry'
      );
    }

    return res
      .status(201)
      .json({ message: 'Episodes added successfully to the database entry' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getEpisodesByAnimeId(req, res) {
  try {
    const id = req.params.id;
    const ep = await episodeService.getEpisodesByAnimeId(id);
    if (!ep || !ep.episodes) {
      return res
        .status(404)
        .json({ message: 'Anime not found or no episodes available' });
    }
    res.json(ep.episodes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getEpisodesByIndex(req, res) {
  try {
    const { id, episode } = req.params;
    // kurang satu agar index episode di endpoint mulai dari 1
    const index = parseInt(episode, 10) - 1;
    if (isNaN(index) || index < 0) {
      //Menjaga agar yg disebut ada episode nya
      return res.status(404).json({ message: 'Invalid episode index' });
    }

    const data = await episodeService.getEpisodesByIndex(id, index);

    //Cek data episode
    if (!data) {
      return res.status(404).json({ message: 'Episode not found' });
    }
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  addAnimeEpisode,
  getEpisodesByAnimeId,
  getEpisodesByIndex,
};
