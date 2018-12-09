const express = require('express');
const numberController = require('../controllers/numbers');

const router = express.Router();

// const isNumeric = (string) => {
//   return !Number.isNaN(parseInt(string));
// };

router.get('/add/:a/and/:b', numberController.add);
router.get('/subtract/:a/from/:b', numberController.subtract);
router.post('/multiply', numberController.multiply);
router.post('/divide', numberController.divide);
router.post('/remainder', numberController.remainder);

// router.get('/add/:a/and/:b', (request, response) => {
//   if (isNumeric(request.params.a) && isNumeric(request.params.b)) {
//     const a = parseInt(request.params.a);
//     const b = parseInt(request.params.b);

//     response.status(200).json({ result: add(a, b) });
//   } else {
//     response.status(400).json({ error: 'Parameters must be valid numbers.' });
//   }
// });

// router.get('/subtract/:a/from/:b', (request, response) => {
//   if (isNumeric(request.params.a) && isNumeric(request.params.b)) {
//     const a = parseInt(request.params.a);
//     const b = parseInt(request.params.b);

//     response.status(200).json({ result: subtract(b, a) });
//   } else {
//     response.status(400).json({ error: 'Parameters must be valid numbers.' });
//   }
// });

// router.post('/multiply', (request, response) => {
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

// router.post('/divide', (request, response) => {
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

// router.post('/remainder', (request, response) => {
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

module.exports = router;
