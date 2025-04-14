const { Animes } = require('../../../models');

async function findById(id) {
  return Animes.findById(id);
};

async function findBasicById(id) {
  return Animes.findById(id).select('title_en title_jp studio status');
};

module.exports = {
  findById,
  findBasicById,
}