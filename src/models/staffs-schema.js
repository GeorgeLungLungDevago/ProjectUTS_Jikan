module.exports = (db) =>
  db.model(
    'Staffs',
    db.Schema({
      staff: [
        {
          name: { type: String, required: false },
          role: {
            type: [String],
            enum: [
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
            ],
            required: false,
          },
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
