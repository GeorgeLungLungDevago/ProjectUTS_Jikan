module.exports = (db) => {
  db.model(
    'Characters',
    db.Schema({
      name: String,
      nicknames: {
        type: String,
      },
      about: String,
    })
  );
};
