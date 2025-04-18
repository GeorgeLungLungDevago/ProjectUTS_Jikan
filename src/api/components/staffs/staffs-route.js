const express = require('express');
// merge params agar id anime dapat diakses melalui req.params dari staffs-controller
const route = express.Router({ mergeParams: true });
const staffController = require('./staffs-controller');

module.exports = (app) => {
  app.use('/anime/:id/staffs', route);

  //Menambahkan data staff anime ke database
  route.post('/', staffController.addStaffToAnime);
};
