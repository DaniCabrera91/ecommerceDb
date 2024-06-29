const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')
const { authentication, isAdmin } = require('../middlewares/authentication')


router.post('/', authentication, isAdmin, ProductController.create)
router.get('/', ProductController.getAll)
router.get('/:id', ProductController.getById)
router.get('/name/:productName', ProductController.getByName)
router.get('/price/:price', ProductController.getByPrice)
router.get('/price/sorted', ProductController.sortedByPriceDescending)


router.delete('/:id', authentication, isAdmin, ProductController.delete)
router.put('/:id', authentication, isAdmin, ProductController.update)


module.exports = router