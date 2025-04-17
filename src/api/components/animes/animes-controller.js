const { errorResponder, errorTypes } = require('../../../core/errors');
const { urlValidator } = require('../../../utils/url-validator');
const animeService = require('./animes-service');

async function validateRequiredField(data) {
  if (
    // judul tidak boleh berupa string kosong (bukan null)
    !data.title_en ||
    data.title_en.trim() === '' ||
    !data.title_jp ||
    data.title_jp.trim() === '' ||
    !data.animeStatus ||
    !data.age_rating ||
    !data.demographics ||
    !Array.isArray(data.genres) ||
    data.genres.length === 0
  ) {
    throw errorResponder(
      errorTypes.VALIDATION_ERROR,
      'Anime entry is invalid or missing one or more required fields:' +
        'title_en, title_jp, status, age_rating, demographics, genres'
    );
  }
}

async function addAnime(req, res) {
  try {
    const {
      title_en,
      title_jp,
      studio,
      status: animeStatus,
      season,
      airing_date,
      age_rating,
      demographics,
      more_info,
      genres,
      duration,
      image_url,
    } = req.body;

    await validateRequiredField(req.body);

    const imageUrl = await urlValidator.validateUrl(image_url);

    const data = {
      title_en,
      title_jp,
      episodes,
      studio,
      animeStatus,
      season,
      airing_date,
      age_rating,
      demographics,
      more_info,
      genres,
      duration,
      imageUrl: Array.isArray(imageUrl) ? imageUrl : [imageUrl], // force single string into array
    };

    const anime = await animeService.addAnime(data);

    if (!anime) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to add anime entry'
      );
    }

    return res
      .status(201)
      .json({ message: 'Anime added successfully to the database entry' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getFullAnime(req, res) {
  try {
    const id = req.params.id;
    const anime = await animeService.getFullAnime(id);
    if (!anime) {
      return res.status(404).json({ message: 'Anime not found' });
    }
    res.json(anime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getAnimeById(req, res) {
  try {
    const id = req.params.id;
    const anime = await animeService.getAnimeById(id);
    if (!anime) {
      return res.status(404).json({ message: 'Anime not found' });
    }
    res.json(anime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getStaffByAnimeId(req, res) {
  try {
    const id = req.params.id;
    const staff = await animeService.getStaffByAnimeId(id);
    if (!staff) {
      return res.status(404).json({ message: 'No staff found for this anime' });
    }
    res.json(staff);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getEpisodesByAnimeId(req, res) {
  try {
    const id = req.params.id;
    const episodes = await animeService.getEpisodesByAnimeId(id);
    if (!episodes) {
      return res
        .status(404)
        .json({ message: 'Anime not found or no episodes available' });
    }
    res.json(episodes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getEpisodesByIndex(req, res) {
  try {
    const { id, episode } = req.params;
    const index = parseInt(episode, 10);
    if (isNaN(index) || index < 0) {
      //Menjaga agar yg disebut ada episode nya
      return res.status(404).json({ message: 'Invalid episode index' });
    }
    const data = await animeService.getEpisodesByIndex(id, index);
    if (!data) {
      return res.status(404).json({ message: 'Episode not found' });
    }
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getCharactersByAnimeId(req, res) {
  try {
    const id = req.params.id;
    const characters = await animeService.getCharactersByAnimeId(id);
    if (!characters || characters.length === 0) {
      return res
        .status(404)
        .json({ message: 'No characters found for this anime' });
    }
    res.json(characters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getAnimePictures(req, res) {
  try {
    const id = req.params.id;
    const pictures = await animeService.getAnimePictures(id);

    if (!pictures) {
      return res.status(404).json({ message: 'Image not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getAnimeMoreInfo(req, res) {
  try {
    const id = req.params.id;
    const anime = await animeService.getAnimeMoreInfo(id);
    if (!anime) {
      return res.status(404).json({ message: 'Anime not found' });
    }
    res.json(anime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getAnimeRecomendations(req, res) {
  try {
    const id = req.params.id;
    const anime = await animeService.getAnimeRecomendations(id);
    if (!anime) {
      return res.status(404).json({ message: 'Anime not found' });
    }
    res.json(anime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getAnimeReviuews(req, res) {
  try {
    const id = req.params.id;
    const anime = await animeService.getAnimeReviews(id);
    if (!anime) {
      return res.status(404).json({ message: 'Anime not found' });
    }
    res.json(anime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getAnimeThemes(req, res) {
  try {
    const id = req.params.id;
    const themes = await animeService.getAnimeThemes(id);
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
  addAnime,
  getFullAnime,
  getAnimeById,
  getStaffByAnimeId,
  getEpisodesByAnimeId,
  getEpisodesByIndex,
  getCharactersByAnimeId,
  getAnimePictures,
  getAnimeMoreInfo,
  getAnimeRecomendations,
  getAnimeReviuews,
  getAnimeThemes,
};
