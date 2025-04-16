module.exports = (db) => {
  db.model(
    'Characters',
    db.Schema({
      name: String,
      nicknames: {
        type: [String],
      },
      about: String,
      animeId: {
        type: db.Schema.Types.ObjectId,
        ref: 'Anime',
        require: true,
      },
    })
  );
};
