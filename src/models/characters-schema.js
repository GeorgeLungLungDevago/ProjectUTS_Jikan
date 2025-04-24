module.exports = (db) =>
  db.model(
    'Characters',
    db.Schema({
      name: { type: String, required: true },
      nicknames: { type: [String], required: false },
      about: { type: String, required: false },
      animeId: {
        type: db.Schema.Types.ObjectId,
        ref: 'Animes',
        required: false,
      },
    })
  );
