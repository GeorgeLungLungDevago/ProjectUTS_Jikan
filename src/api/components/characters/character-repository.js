const { Characters } = require('../../../models');
const { addCharacters } = require('./animes-service');

async function addCharacters(name, nicknames, about) {
  return Characters.addCharacters(name, nicknames, about);
}

module.exports = {
  addCharacters,
};
