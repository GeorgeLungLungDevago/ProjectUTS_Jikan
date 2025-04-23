module.exports = (db) =>
  db.models.Animes ||
  db.model(
    'Animes',
    new db.Schema({
      title_en: { type: String, required: true, unique: true },
      title_jp: { type: String, required: true, unique: true },
      studio: { type: String },
      status: {
        type: String,
        enum: ['Airing', 'Completed', 'Upcoming'],
        required: true,
      },
      season: {
        type: String,
        enum: ['Winter', 'Spring', 'Summer', 'Fall', 'Unknown'],
        required: true,
      },
      airing_date: {
        start: { type: Date },
        end: { type: Date },
      },
      age_rating: {
        type: String,
        enum: ['G', 'PG', 'PG-13', 'R-17+'],
        required: true,
      },
      demographics: {
        type: String,
        enum: ['Shounen', 'Shoujo', 'Seinen', 'Josei', 'Kodomo'],
        required: true,
      },
      more_info: { type: String },
      genres: { type: [String], required: true },
      duration: { type: String },
      image_url: { type: [String], default: [] },
    })
  );