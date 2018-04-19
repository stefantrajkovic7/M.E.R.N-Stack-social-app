const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('./controller');

router.post('/register', controller.create);
router.post('/login', controller.login);

module.exports = router;