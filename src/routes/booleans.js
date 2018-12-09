const express = require('express');
const booleanController = require('../controllers/booleans');

const router = express.Router();

router.post('/negate', booleanController.negate);

module.exports = router;
