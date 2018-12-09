const express = require('express');
const stringsRouter = require('./routes/strings');
const numbersRouter = require('./routes/numbers');
const booleanRouter = require('./routes/booleans');
// const { sayHello } = require('./lib/strings');
// const { uppercase } = require('./lib/strings');
// const { lowercase } = require('./lib/strings');
// const { firstCharacter } = require('./lib/strings');
// const { firstCharacters } = require('./lib/strings');
// const { add } = require('./lib/numbers');
// const { subtract } = require('./lib/numbers');
// const { multiply } = require('./lib/numbers');
// const { divide } = require('./lib/numbers');
// const { remainder } = require('./lib/numbers');

const app = express();
app.use(express.json());
app.use('/strings', stringsRouter);
app.use('/numbers', numbersRouter);
app.use('/booleans', booleanRouter);

// const isNumeric = (string) => {
//   return !Number.isNaN(parseInt(string));
// };

// app.get('/strings/hello/:string', (request, response) => {
//   response.json({ result: sayHello(request.params.string) });
// });

// app.get('/strings/upper/:string', (request, response) => {
//   response.json({ result: uppercase(request.params.string) });
// });

// app.get('/strings/lower/:string', (request, response) => {
//   response.json({ result: lowercase(request.params.string) });
// });

// app.get('/strings/first-characters/:string', (request, response) => {
//   if (request.query.length) {
//     response.json({ result: firstCharacters(request.params.string, request.query.length) });
//   } else {
//     response.json({ result: firstCharacter(request.params.string) });
//   }
// });

// app.get('/numbers/add/:a/and/:b', (request, response) => {
//   if (isNumeric(request.params.a) && isNumeric(request.params.b)) {
//     const a = parseInt(request.params.a);
//     const b = parseInt(request.params.b);

//     response.status(200).json({ result: add(a, b) });
//   } else {
//     response.status(400).json({ error: 'Parameters must be valid numbers.' });
//   }
// });

// app.get('/numbers/subtract/:a/from/:b', (request, response) => {
//   if (isNumeric(request.params.a) && isNumeric(request.params.b)) {
//     const a = parseInt(request.params.a);
//     const b = parseInt(request.params.b);

//     response.status(200).json({ result: subtract(b, a) });
//   } else {
//     response.status(400).json({ error: 'Parameters must be valid numbers.' });
//   }
// });

// app.post('/numbers/multiply', (request, response) => {
//   if ((request.body.a === undefined) || (request.body.b === undefined)) {
//     response.status(400).json({ error: 'Parameters "a" and "b" are required.' });
//   } else {
//     if (isNumeric(request.body.a) && isNumeric(request.body.b)) {
//       response.status(200).json({ result: multiply(request.body.a, request.body.b) });
//     } else {
//       response.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
//     }
//   }
// });

// app.post('/numbers/divide', (request, response) => {
//   if ((request.body.a === undefined) || (request.body.b === undefined)) {
//     response.status(400).json({ error: 'Parameters "a" and "b" are required.' });
//   } else {
//     if (isNumeric(request.body.a) && isNumeric(request.body.b)) {
//       if ((request.body.b === 0)) {
//         response.status(400).json({ error: 'Unable to divide by 0.' });
//       } else {
//         response.status(200).json({ result: divide(request.body.a, request.body.b) });
//       }
//     } else {
//       response.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
//     }
//   }
// });

// app.post('/numbers/remainder', (request, response) => {
//   if ((request.body.a === undefined) || (request.body.b === undefined)) {
//     response.status(400).json({ error: 'Parameters "a" and "b" are required.' });
//   } else {
//     if (isNumeric(request.body.a) && isNumeric(request.body.b)) {
//       if ((request.body.b === 0)) {
//         response.status(400).json({ error: 'Unable to divide by 0.' });
//       } else {
//         response.status(200).json({ result: remainder(request.body.a, request.body.b) });
//       }
//     } else {
//       response.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
//     }
//   }
// });

module.exports = app;
