const animesRoute = require('./animes-route');
const animeService = require('./animes-service');

async function addAnime(req, res) {
  try {
    const data = ({
      title_en: titleEN,
      title_jp: titleJP,
      episodes: episodes,
      studio: studio,
      status: animeStatus,
      season: season,
      airing_date: airing_date,
      age_rating: age_rating,
      demographics: demographics,
      genres: genres,
      duration_minutes: duration_minutes,
    } = req.body);

    if (!data) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Failed to add anime entry'
      );
    }

    const anime = await booksService.create(data);

    return response
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
    res.json(staff)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server error' });
  }
}

async function getEpisodesByAnimeId(req, res) {
  try {
    const id = req.params.id;
    const episodes = await animeService.getEpisodesByAnimeId(id);
    if (!episodes) {
      return res.status(404).json({ message: 'Anime not found or no episodes available'});
    }
    res.json(episodes)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server error'});
  }
}

async function getEpisodesByIndex(req, res) {
  try {
    const { id, episode } = req.params;
    const index = parseInt(episode, 10);
    if (isNaN(index) || index < 0) { //Menjaga agar yg disebut ada episode nya
      return res.status(404).json({ message: 'Invalid episode index' });
    }
    const data = await animeService.getEpisodesByIndex(id, index);
    if (!data) {
      return res.status(404).json({ message: 'Episode not found' });
    }
    res.json(data);
  } catch (error) {
    console.log(error)
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
    const anime = await animeService.getAnimePictures(id);
    // TO DO LIST:
    // w harus kembalikan link gambar kah? kalo iya,
    // daftar link jadikan data di schema anime atau gmn? ntar
    // kebanyakan models soalnya
    if (!anime) {
      return res.status(404).json({ message: 'Anime not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getAnimeMoreInfo(req, res) {
  try{
    const id = req.params.id;
    const anime = await animeService.getAnimeMoreInfo(id);
    if(!anime){
      return res.status(404).json({ message: 'Anime not found' });
    }
    res.json(anime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getAnimeRecomendations(req, res){
  try{
    const id = req.params.id;
    const anime = await animeService.getAnimeRecomendations(id);
    if(!anime){
      return res.status(404).json({ message: 'Anime not found' });
    }
    res.json(anime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getAnimeUserUpdates(req, res) {
  try {
    const id = req.params.id;
    const anime = await animeService.getAnimeUserUpdates(id);
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
  getStaffByAnimeId,
  getEpisodesByAnimeId,
  getEpisodesByIndex,
  getCharactersByAnimeId,
  getAnimePictures,
  getAnimeMoreInfo,
  getAnimeRecomendations,
  getAnimeUserUpdates,
};
