const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('./controller');

router.post('/', controller.create);

module.exports = router;