const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

require('dotenv').config();

const dbExports = {};

// Inisialisasi koneksi database
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('✅ Connected to MongoDB');
});

// Membaca semua file model di folder models
const modelsPath = __dirname;
fs.readdirSync(modelsPath).forEach((file) => {
  if (file !== 'db.js' && file.endsWith('-schema.js')) {
    const modelFactory = require(path.join(modelsPath, file));
    if (typeof modelFactory === 'function') {
      const model = modelFactory(mongoose);
      dbExports[model.modelName] = model;
    } else {
      console.error(`File ${file} tidak mengekspor fungsi.`);
    }
  }
});

dbExports.db = db;
module.exports = dbExports;