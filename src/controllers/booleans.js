const { negate } = require('../lib/booleans');
const { truthiness } = require('../lib/booleans');
const { isOdd } = require('../lib/booleans');
const { startsWith } = require('../lib/booleans');

exports.negate = (request, response) => {
  response.json({ result: negate(request.body.value) });
};

exports.truthiness = (request, response) => {
  response.json({ result: truthiness(request.params.string) });
};

exports.isOdd = (request, response) => {
  response.json({ result: isOdd(request.body.a) });
};

exports.startsWith = (request, response) => {
  response.json({ result: startsWith(request.body.a) });
};

module.exports = exports;
