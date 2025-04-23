const express = require('express');

const users = require('./components/users/users-route');
const animes = require('./components/animes/animes-route');
const characters = require('./components/characters/characters-route');
const staffs = require('./components/staffs/staffs-route');
const episodes = require('./components/episodes/episodes-route');
const animeCharacters = require('./components/characters/anime-characters-route');
const themes = require('./components/themes/themes-route');
const random = require('./components/animes/random-route');

module.exports = () => {
  const app = express.Router();

  users(app);
  animes(app);
  characters(app);
  staffs(app);
  episodes(app);
  animeCharacters(app);
  themes(app);
  random(app);

  return app;
};
