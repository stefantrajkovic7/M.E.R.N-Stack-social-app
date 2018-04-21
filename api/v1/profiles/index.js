const express = require('express');
const router = express.Router({ mergeParams: true });

const middleware = require("../../../middlewares");
const controller = require('./controller');

router.get('/', middleware.authenticate, controller.find);
router.get('/list', controller.list);
router.get('/handle/:handle', controller.findHandle);
router.get('/user/:user_id', controller.findUser);
router.post('/create', middleware.authenticate, controller.create);

module.exports = router;