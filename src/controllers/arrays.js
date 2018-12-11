const { getNthElement } = require('../lib/arrays');
const { arrayToCSVString } = require('../lib/arrays');
const { addToArray2 } = require('../lib/arrays');
const { elementsStartingWithAVowel } = require('../lib/arrays');
const { removeNthElement } = require('../lib/arrays');
const { removeNthElement2 } = require('../lib/arrays');

exports.elementAt = (request, response) => {
  response.json({ result: getNthElement(request.params.a, request.body.array) });
};

exports.toString = (request, response) => {
  response.json({ result: arrayToCSVString(request.body.array) });
};

exports.append = (request, response) => {
  response.json({ result: addToArray2(request.body.value, request.body.array) });
};

exports.startsWithVowel = (request, response) => {
  response.json({ result: elementsStartingWithAVowel(request.body.array) });
};

exports.removeElement = (request, response) => {
  console.log(request.query.index);
  console.log(request.body.array);

  // const index = 2;
  // const array = ['cat', 'dog', 'elephant', 'fox'];

  const index = request.query.index;
  const array = request.body.array;

  response.json({ result: removeNthElement(index, array) });

  // response.json({ result: removeNthElement(request.query.index, request.body.array) });

//   if (request.query.index === null) {
//     request.body.index = 0;
//     response.json({ result: removeNthElement(request.query.index, request.body.array) });
//   } else {
//     response.json({ result: removeNthElement(request.query.index, request.body.array) });
//   }
// };
};

module.exports = exports;
