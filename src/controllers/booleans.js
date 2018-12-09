const { negate } = require('../lib/booleans');
// const { truthiness } = require('../lib/booleans');
// const { isOdd } = require('../lib/booleans');
// const { startsWith } = require('../lib/booleans');

exports.negate = (request, response) => {
  response.json({ result: negate(request.params.string) });
};

module.exports = exports;
