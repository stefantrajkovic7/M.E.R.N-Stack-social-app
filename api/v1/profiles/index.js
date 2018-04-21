const express = require('express');
const router = express.Router({ mergeParams: true });

const middleware = require("../../../middlewares");
const controller = require('./controller');

router.get('/', middleware.authenticate, controller.find);
router.post('/create', middleware.authenticate, controller.create);

module.exports = router;