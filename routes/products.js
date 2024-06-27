const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')
const { authentication, isAdmin } = require('../middlewares/authentication')


router.post('/', authentication, ProductController.create)
router.get('/', ProductController.getAll)
router.delete('/:id', ProductController.delete)
// router.put('/:id', ProductController.update)


module.exports = router