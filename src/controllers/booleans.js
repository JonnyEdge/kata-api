const { negate } = require('../lib/booleans');
const { truthiness } = require('../lib/booleans');
const { isOdd } = require('../lib/booleans');
const { startsWith } = require('../lib/booleans');

const isNumeric = (string) => {
  return !Number.isNaN(parseInt(string));
};

exports.negate = (request, response) => {
  response.json({ result: negate(request.body.value) });
};

exports.truthiness = (request, response) => {
  response.json({ result: truthiness(request.body.value) });
};

exports.isOdd = (request, response) => {
  if (isNumeric(request.params.a)) {
    response.status(200).json({ result: isOdd(request.params.a) });
  } else {
    response.status(400).json({ error: 'Parameter must be a number.' });
  }
};

exports.startsWith = (request, response) => {
  if (((request.params.b).length) === 1) {
    response.json({ result: startsWith(request.params.b, request.params.a) });
  } else {
    response.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
};

module.exports = exports;
