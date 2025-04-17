const validate = require('mongoose-validator');
const { errorResponder, errorTypes } = require('../core/errors');

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

async function validateUrl(url) {
  const valid = urlValidator(url);
  if (!valid) {
    throw errorResponder(errorTypes.VALIDATION_ERROR, 'Invalid URL!');
  }
  return url;
}

module.exports = {
  validateUrl,
};
