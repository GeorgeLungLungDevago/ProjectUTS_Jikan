const characterService = require('./characters-service');

async function getCharacterByAnimeId(req, res) {
  try {
    const id = req.params.id;
    const anime = await characterService.getCharacterByAnimeId(id);
    if (!anime) {
      return res.status(404).json({ message: 'Anime not found for this character' });
    }
    res.json(anime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  getCharacterByAnimeId,
}