const express = require('express');
const { sayHello } = require('../lib/strings');
const { uppercase } = require('../lib/strings');
const { lowercase } = require('../lib/strings');
const { firstCharacter } = require('../lib/strings');
const { firstCharacters } = require('../lib/strings');

const router = express.Router();

router.get('/hello/:string', (request, response) => {
  response.json({ result: sayHello(request.params.string) });
});

router.get('/upper/:string', (request, response) => {
  response.json({ result: uppercase(request.params.string) });
});

router.get('/lower/:string', (request, response) => {
  response.json({ result: lowercase(request.params.string) });
});

router.get('/first-characters/:string', (request, response) => {
  if (request.query.length) {
    response.json({ result: firstCharacters(request.params.string, request.query.length) });
  } else {
    response.json({ result: firstCharacter(request.params.string) });
  }
});

module.exports = router;
