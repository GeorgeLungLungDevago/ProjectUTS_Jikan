module.exports = (db) =>
  db.model(
    'Recomendations',
    new db.Schema({
      recomendation: [
        {
          type: String,
          url: String,
          title: String,
          required: false,
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
