const animeService = require('./animes-service');

async function addAnime(req, res) {
  try {
    const {
      title_en,
      title_jp,
      episodes,
      studio,
      status,
      season,
      airing_date,
      age_rating,
      demographics,
      genres,
      duration_minutes,
      image_url: imageUrl,
    } = req.body;

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
      genres,
      duration_minutes,
      image_url: Array.isArray(imageUrl) ? imageUrl : [imageUrl],
    };

    const anime = await animeService.addAnime(data);

    if (!anime) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
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

module.exports = {
  addAnime,
  getFullAnime,
  getAnimeById,
  getCharactersByAnimeId,
  getAnimePictures,
  getAnimeMoreInfo,
  getAnimeRecomendations,
};
