const animeService = require('./animes-service');

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
    res.status(500).json({ message: 'Server error' })
  }
}

async function getAnimeById(req, res) {
  try {
    const id = req.params.id;
    const anime = await animeService.getAnimeById(id);
    if(!anime) {
      return res.status(404).json({ message: 'Anime not found' })
    }
    res.json(anime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' })
  }
}

async function getCharactersByAnimeId(req, res) {
  try {
    const id = req.params.id;
    const characters = await animeService.getCharactersByAnimeId(id);
    if(!characters || characters.length === 0) {
      return res.status(404).json({ message: 'No characters found for this anime'})
    } 
    res.json(characters);
  } catch(error) {
    console.log(error);
    res.status(500).json({ message: 'Server error'})
  }
}

module.exports = {
  getFullAnime,
  getAnimeById,
  getCharactersByAnimeId,
}