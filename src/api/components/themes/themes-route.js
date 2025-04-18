const express = require('express');
const route = express.Router({ mergeParams: true });
const themesController = require('./themes-controller');

module.exports = (app) => {
  app.use('/anime/:id/themes', route);

  // menambahkan themes anime
  route.post('/', themesController.addThemesToAnime);

  // mendapatkan link opening/closing theme dengan menggunakan id anime
  route.get('/', themesController.getAnimeThemes);
};
