require("dotenv").config(); // ← Taruh paling atas

const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const connectionString = new URL(process.env.DB_CONNECTION);
connectionString.pathname += process.env.DB_NAME;

mongoose.connect(connectionString.toString(), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => console.log("✅ MongoDB connected"));

const dbExports = { db };

// Autoload model
const basename = path.basename(__filename);
fs.readdirSync(__dirname)
  .filter((file) => file !== basename && file.endsWith("-schema.js"))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(mongoose);
    dbExports[model.modelName] = model;
  });

module.exports = dbExports;
