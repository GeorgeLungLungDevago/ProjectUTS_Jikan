module.exports = (db) =>
  db.model(
    'Episodes',
    db.Schema({
      episodes: [
        {
          url: String,
          title: { type: String, required: true },
          score: Number,
          aired: Date,
        },
      ],
      animeId: {
        // menyimpan FK yg merujuk ke animes-schema
        type: db.Schema.Types.ObjectId,
        ref: 'Animes',
        required: true,
      },
    })
  );
