module.exports = (db) =>
  db.model(
    'Characters',
    db.Schema({
      name: { type: String, required: true },
      nicknames: { type: [String], required: false },
      about: { type: String, required: false },
      animeId: {
        // characters menyimpan FK yg merujuk ke animes-schema
        type: db.Schema.Types.ObjectId,
        ref: 'Animes',
        required: true,
      },
    })
  );
