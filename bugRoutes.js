const express = require('express');
const router = express.Router();
const { createBug, getAllBugs } = require('../controllers/bugController');

router.post('/', createBug);
router.get('/', getAllBugs);

module.exports = router;