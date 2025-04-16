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
      episodes_list: [
        {
        url: String,
        title: String,
        score: Number,
        aired: Date,
        }
      ],
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
      more_info: {
        type: String,
        required: true,
      },
      recomendation: [{
        type: String,
        url: String,
        title: String,
        required: true,
      }],
      relations:[{
        "relation" : {
          type: String,
          "entry":[{
            "id" : 0,
            "type" : String,
            "name" : String,
            "url" : String,
          }],
          required: true,
        }
      }],
      reviews: [{
        type: String,
        url: String,
        title: String,
        reaction: {
          type: String,
          "overall" : 0,
          "nice" : 0,
          "love_it" : 0,
          "funny" : 0, 
          "confusing" : 0,
          "informative" : 0,
          "well_writen" : 0,
          "creative" : 0
        },
        reviews: String,
        date: Date,
        "score" : 0,
        "tags" : [String],
        "is_spoiler": true,
        "is_preliminary": true,
        "episode_watched" : 0,
        required: true,
      }],
      themes:
      {
        opening: [String],
        ending: [String],
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
      staff: [{
        name: String,
        role: [
          'Producer',
          'Assistant Producer',
          'Script',
          'Storyboard',
          'Sound Director',
          'Episode Director',
          'Series Composition',
          'Theme Song Lyrics',
          'Inserted Song Performance',
          'Key Animation',
          'ADR Director',
          'Animation Director',
          'Special Effects',
          'Background Art',
          'Art Director',
          'Color Design',
          'Director of Photography',
          'Digital Paint',
          'In Between Animation',
          'Music',
          'Editing',
          'Mechanical Design',
        ]
      }]
    })
  );
};
