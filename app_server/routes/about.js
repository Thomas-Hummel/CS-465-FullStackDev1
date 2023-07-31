const express = require('express');
const router = express.Router();
const controller = require('../controllers/about');

/* GET about page. */
router.get('/', controller.aboutView);

module.exports = router;
