module.exports = (db) =>
  db.models.Characters ||
  db.model(
    'Characters',
    new db.Schema({
      name: { type: String, required: true },
      nicknames: { type: [String], default: [] },
      about: { type: String, required: true },
      animeId: {
        type: db.Schema.Types.ObjectId,
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
    })
  );