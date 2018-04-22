const express = require('express');
const router = express.Router({ mergeParams: true });

const middleware = require("../../../middlewares");
const controller = require('./controller');

router.get('/');
router.post('/create', middleware.authenticate, controller.create);

module.exports = router;