const express = require('express');
const booleanController = require('../controllers/booleans');

const router = express.Router();

router.post('/negate', booleanController.negate);
router.post('/truthiness', booleanController.truthiness);
router.get('/is-odd/:a', booleanController.isOdd);
router.get('/:a/starts-with/:b', booleanController.startsWith);

module.exports = router;
