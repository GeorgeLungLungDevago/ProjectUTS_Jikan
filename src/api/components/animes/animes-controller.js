const e = require('express');
const { errorResponder, errorTypes } = require('../../../core/errors');
const { validateUrlArray } = require('../../../utils/url-validator');
const animeService = require('./animes-service');

async function validateRequiredField(data) {
  if (
    // judul tidak boleh berupa string kosong (bukan null)
    !data.title_en ||
    data.title_en.trim() === '' ||
    !data.title_jp ||
    data.title_jp.trim() === '' ||
    !data.status ||
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
      status,
      season,
      airing_date,
      age_rating,
      demographics,
      more_info,
      genres,
      duration,
      image_url,
    } = req.body;

    // instasiasi field tanggal agar dianggap sebagai
    // tipe data Date oleh js, bukan string
    const startDate = new Date(airing_date.start);
    const endDate = new Date(airing_date.end);

    if (endDate < startDate) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Airing start date must be less than airing date end!'
      );
    }

    await validateRequiredField(req.body);

    await validateUrlArray(image_url);

    const data = {
      title_en,
      title_jp,
      studio,
      status,
      season,
      airing_date,
      age_rating,
      demographics,
      more_info,
      genres,
      duration,
      image_url: Array.isArray(image_url) ? image_url : [image_url], // force single string into array
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

async function getAnimes(req, res) {
  try {
    // default page = 1 dan limit = 3
    const { page = 1, limit = 3 } = req.query;
    // kurangi dengan 1 agar indeks page mulai dari 1 dari sisi client
    console.log('page:', page, 'limit:', limit);
    const animes = await animeService.getAnimes(
      parseInt(page),
      parseInt(limit)
    );

    if (!animes || animes.length === 0) {
      return res.status(404).json({ message: 'No anime found!' });
    }

    return res.status(200).json(animes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getFullAnime(req, res) {
  try {
    const id = req.params.id;
    const anime = await animeService.getFullAnimeById(id);
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
    res.json(pictures);
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

async function getAnimeReviews(req, res) {
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

async function getRandomAnime(req, res) {
  try {
    const anime = await animeService.getRandomAnime();
    if (!anime) {
      return res.status(404).json({ message: 'Anime not found' });
    }
    res.json(anime);
  } catch {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  addAnime,
  getAnimes,
  getFullAnime,
  getAnimeById,
  getCharactersByAnimeId,
  getAnimePictures,
  getAnimeMoreInfo,
  getAnimeRecomendations,
  getAnimeReviews,
  getRandomAnime,
};
