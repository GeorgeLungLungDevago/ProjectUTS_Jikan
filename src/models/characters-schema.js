const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nicknames: { type: [String], default: [] },
  about: { type: String, required: true },
  animeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Animes',
    required: true,
  },
  voice_actors: [
    {
      name: { type: String, required: true },
      language: { type: String, required: true },
    },
  ],
  pictures: { type: [String], default: [] },
});

module.exports =
  mongoose.models.Characters || mongoose.model('Characters', CharacterSchema);
