const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.showHome);

router.get('/main', mainController.showHome);

module.exports = router;
