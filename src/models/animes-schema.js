module.exports = (db) => {
  db.model(
    'Anime',
    db.Schema({
      title_en: String,
      title_jp: String,
      episodes: Number,
      studio: {
        type: String,
      },
      status: {
        type: String,
        enum: ['Airing', 'Completed', 'Upcoming'],
        required: true,
      },
      season: {
        type: String,
        enum: ['Winter', 'Spring', 'Summer', 'Fall', 'Unknown'],
        required: false,
      },
      airing_date: {
        start: {
          type: Date, // null if the airing date is TBA
          required: false,
        },
        end: {
          type: Date, // null if the anime is still airing
          required: false,
        },
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
        type: [String],
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
      duration_minutes: Number, 
      external_links: {
        mal: {type:String},
        anilist: {type:String},
        official: {type:String},
        youtube_trailer: {type:String},
      }
    })
  );
};
