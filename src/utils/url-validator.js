const validate = require('mongoose-validator');

// check url string by using mongoose-validator library
const urlValidator = [
  validate({
    validator: 'isURL',
    message: 'Invalid URL format',
    options: {
      protocols: ['http', 'https'],
      require_protocol: true,
    },
  }),
];

module.exports = {
  urlValidator,
};
