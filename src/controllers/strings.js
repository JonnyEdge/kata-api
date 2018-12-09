const { sayHello } = require('../lib/strings');
const { uppercase } = require('../lib/strings');
const { lowercase } = require('../lib/strings');
const { firstCharacter } = require('../lib/strings');
const { firstCharacters } = require('../lib/strings');

exports.hello = (request, response) => {
  response.json({ result: sayHello(request.params.string) });
};

exports.upper = (request, response) => {
  response.json({ result: uppercase(request.params.string) });
};

exports.lower = (request, response) => {
  response.json({ result: lowercase(request.params.string) });
};

exports.firstchar = (request, response) => {
  if (request.query.length) {
    response.json({ result: firstCharacters(request.params.string, request.query.length) });
  } else {
    response.json({ result: firstCharacter(request.params.string) });
  }
};

module.exports = exports;
