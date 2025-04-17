const express = require('express');
const route = express.Router();
const staffController = require('./staffs-controller');

module.exports = (app) => {
  app.use('/anime/:id/staffs', route);

  //Menambahkan data staff anime ke database
  route.post('/', staffController.addStaffToAnime);
};
