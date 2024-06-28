const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')
const { authentication, isAdmin } = require('../middlewares/authentication')


router.post('/', ProductController.create)
router.get('/', ProductController.getAll)
router.get('/:id', ProductController.getById)
router.get('/name/:productName', ProductController.getByName)
router.get('/', ProductController.getByprice)


router.delete('/:id', ProductController.delete)
router.put('/:id', ProductController.update)


module.exports = router