/* eslint-disable prettier/prettier */
module.exports = (db) => {
  db.Model(
    'Anime',
    db.Schema({
      title_en: String,
      title_jp: String,
      episodes: Number,
      studio: String,
      status: {
        type: String,
        enum: ['airing', 'completed', 'upcoming'],
        required: true,
      },
      season: {
        type: String,
        enum: ['Winter', 'Spring', 'Summer', 'Fall'],
        required: true,
      },
      airing_date: {
        type: Date,
        required: true,
      },
      age_rating: {
        type: String,
        enum: ['G', 'PG', 'PG-13', 'R-17+'],
        required: true,
      },
      demographics: {
        type: String,
        enum: ['shounen', 'shoujo', 'seinen', 'josei', 'kodomo'],
        required: true,
      },
      genres: {
        type: String,
        enum: [
          'action',
          'adventure',
          'comedy',
          'drama',
          'fantasy',
          'horror',
          'mystery',
          'romance',
          'sci-fi',
          'slice of life',
        ],
        required: true,
      },
    })
  );
};
