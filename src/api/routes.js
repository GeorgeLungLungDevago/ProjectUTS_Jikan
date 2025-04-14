const express = require('express');

const books = require('./components/books/books-route');
const users = require('./components/users/users-route');
const animes = require('./components/animes/animes-route');

module.exports = () => {
  const app = express.Router();

  books(app);
  users(app);
  animes(app);

  return app;
};
