const { add } = require('../lib/numbers');
const { subtract } = require('../lib/numbers');
const { multiply } = require('../lib/numbers');
const { divide } = require('../lib/numbers');
const { remainder } = require('../lib/numbers');

const isNumeric = (string) => {
  return !Number.isNaN(parseInt(string));
};

exports.add = (request, response) => {
  if (isNumeric(request.params.a) && isNumeric(request.params.b)) {
    const a = parseInt(request.params.a);
    const b = parseInt(request.params.b);

    response.status(200).json({ result: add(a, b) });
  } else {
    response.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
};

exports.subtract = (request, response) => {
  if (isNumeric(request.params.a) && isNumeric(request.params.b)) {
    const a = parseInt(request.params.a);
    const b = parseInt(request.params.b);

    response.status(200).json({ result: subtract(b, a) });
  } else {
    response.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
};

exports.multiply = (request, response) => {
  if ((request.body.a === undefined) || (request.body.b === undefined)) {
    response.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else {
    if (isNumeric(request.body.a) && isNumeric(request.body.b)) {
      response.status(200).json({ result: multiply(request.body.a, request.body.b) });
    } else {
      response.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
    }
  }
};

exports.divide = (request, response) => {
  if ((request.body.a === undefined) || (request.body.b === undefined)) {
    response.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else {
    if (isNumeric(request.body.a) && isNumeric(request.body.b)) {
      if ((request.body.b === 0)) {
        response.status(400).json({ error: 'Unable to divide by 0.' });
      } else {
        response.status(200).json({ result: divide(request.body.a, request.body.b) });
      }
    } else {
      response.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
    }
  }
};

exports.remainder = (request, response) => {
  if ((request.body.a === undefined) || (request.body.b === undefined)) {
    response.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else {
    if (isNumeric(request.body.a) && isNumeric(request.body.b)) {
      if ((request.body.b === 0)) {
        response.status(400).json({ error: 'Unable to divide by 0.' });
      } else {
        response.status(200).json({ result: remainder(request.body.a, request.body.b) });
      }
    } else {
      response.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
    }
  }
};

module.exports = exports;
