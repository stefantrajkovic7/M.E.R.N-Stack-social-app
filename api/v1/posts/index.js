const express = require('express');
const router = express.Router({ mergeParams: true });

const middleware = require("../../../middlewares");
const controller = require('./controller');

router.get('/', controller.list);
router.get('/:id', controller.find);
router.post('/create', middleware.authenticate, controller.create);
router.post('/like/:id', middleware.authenticate, controller.like);
router.post('/unlike/:id', middleware.authenticate, controller.unlike);
router.delete('/:id', middleware.authenticate, controller.remove);

module.exports = router;