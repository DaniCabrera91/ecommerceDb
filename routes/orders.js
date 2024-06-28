// const express = require('express')
// const router = express.Router()
// const OrderController = require('../controllers/OrderController')
// const { authentication, isAdmin } = require('../middlewares/authentication')

// router.post('/', authentication, OrderController.create)
// router.post('/', CategoryController.create);
// router.get('/', CategoryController.list);
// router.get('/:id', CategoryController.getById);
// router.put('/:id', CategoryController.update);
// router.delete('/:id', CategoryController.delete);

// module.exports = router

const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');

// Crear una nueva orden
router.post('/', OrderController.create);

// Obtener todas las órdenes
router.get('/', OrderController.getAll);

// Obtener una orden por ID
router.get('/:id', OrderController.getById);

// Actualizar una orden por ID
router.put('/:id', OrderController.update);

// Eliminar una orden por ID
router.delete('/:id', OrderController.delete);

module.exports = router;
