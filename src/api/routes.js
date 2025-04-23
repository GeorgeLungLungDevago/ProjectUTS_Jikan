const express = require("express");
const users = require("./components/users/users-route");
const animes = require("./components/animes/animes-route");
const characters = require("./components/characters/characters-route");
const staffs = require("./components/staffs/staffs-route");
const episodes = require("./components/episodes/episodes-route");
const animeCharacters = require("./components/characters/anime-characters-route");
const themes = require("./components/themes/themes-route");

module.exports = () => {
  const router = express.Router();

  // Register routes
  users(router);
  animes(router);
  characters(router);
  staffs(router);
  episodes(router);
  animeCharacters(router);
  themes(router);

  return router;
};
