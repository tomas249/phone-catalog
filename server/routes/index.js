const router = require('express').Router();
const errorHandler = require('../middleware/error');

const phonesRoute = require('./phones');

router.use('/phones', phonesRoute);
router.use(errorHandler);

module.exports = router;
