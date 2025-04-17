module.exports = (db) =>
  db.model(
    'Themes',
    db.Schema({
      themes: {
        opening: [String],
        ending: [String],
      },
      animeId: {
        // menyimpan FK yg merujuk ke animes-schema
        type: db.Schema.Types.ObjectId,
        ref: 'Animes',
        required: true,
      },
    })
  );
