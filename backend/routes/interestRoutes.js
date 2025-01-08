const express = require('express');
const { handleUserInterest } = require('../controllers/careerController');

const router = express.Router();

router.post('/career-suggestions', handleUserInterest);

module.exports = router;
