const express = require('express');
const arrayController = require('../controllers/arrays');

const router = express.Router();

router.post('/element-at-index/:a', arrayController.elementAt);
router.post('/to-string', arrayController.toString);
router.post('/append', arrayController.append);
router.post('/starts-with-vowel', arrayController.startsWithVowel);
router.post('/remove-element', arrayController.removeElement);

module.exports = router;
