const express = require('express');
const router = express.Router();
const controller = require('./server/controllers/responseCtrl');

router.get('/response', controller.responseCtrl.get)
router.post('/response', controller.responseCtrl.post)

module.exports = router;