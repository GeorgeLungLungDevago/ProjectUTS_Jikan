const isUrlHttp = require('is-url-http');
const { errorResponder, errorTypes } = require('../core/errors');

// cukup gunakan fungsi ini saja jika url disimpan dalam String biasa
async function validateUrlReq(url) {
  if (!isUrlHttp(url)) {
    throw errorResponder(errorTypes.VALIDATION_ERROR, 'Invalid URL!');
  }
  return url;
}

// jika dalam schema url disimpan dalam array, gunakan fungsi ini
// (e.g.       image_url: [String])
async function validateUrlArray(urls) {
  if (!Array.isArray(urls)) {
    throw errorResponder(
      errorTypes.VALIDATION_ERROR,
      'Image URL must be an array'
    );
  }

  const validatedUrls = [];

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    try {
      await validateUrlReq(url);
      validatedUrls.push(url);
    } catch (err) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        `Invalid URL at index ${i}: ${url}`
      );
    }
  }

  return validatedUrls;
}

module.exports = {
  validateUrlReq,
  validateUrlArray,
};
