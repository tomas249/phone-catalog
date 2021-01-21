const router = require('express').Router();

const phonesController = require('../controllers/phones');

router.get('/loadMock', phonesController.loadMockPhones);

router.get('/', phonesController.getPhones);
router.post('/', phonesController.addPhone);
router.get('/:phoneId', phonesController.getPhoneById);
router.delete('/:phoneId', phonesController.deletePhone);
router.put('/:phoneId', phonesController.editPhone);

module.exports = router;
