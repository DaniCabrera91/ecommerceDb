const express = require('express')
const router = express.Router()
const OrderController = require('../controllers/OrderController')
const { authentication, isAdmin } = require('../middlewares/authentication')

router.post('/', authentication, OrderController.create)
// router.post('/', CategoryController.create);
router.get('/', OrderController.getAll);
// router.get('/:id', CategoryController.getById);
// router.put('/:id', CategoryController.update);
// router.delete('/:id', CategoryController.delete);

module.exports = router


