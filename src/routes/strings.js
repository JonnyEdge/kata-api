const express = require('express');
const stringsController = require('../controllers/strings');

const router = express.Router();

router.get('/hello/:string', stringsController.hello);
router.get('/upper/:string', stringsController.upper);
router.get('/lower/:string', stringsController.lower);
router.get('/first-characters/:string', stringsController.firstchar);


// router.get('/hello/:string', (request, response) => {
//   response.json({ result: sayHello(request.params.string) });
// });

// router.get('/upper/:string', (request, response) => {
//   response.json({ result: uppercase(request.params.string) });
// });

// router.get('/lower/:string', (request, response) => {
//   response.json({ result: lowercase(request.params.string) });
// });

// router.get('/first-characters/:string', (request, response) => {
//   if (request.query.length) {
//     response.json({ result: firstCharacters(request.params.string, request.query.length) });
//   } else {
//     response.json({ result: firstCharacter(request.params.string) });
//   }
// });

module.exports = router;
