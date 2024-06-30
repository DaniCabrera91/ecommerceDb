const express = require('express')
const router = express.Router()
const ReviewController = require('../controllers/ReviewController')
const { authentication } = require('../middlewares/authentication')

router.get('/', ReviewController.getAll)
router.get('/id/:id', ReviewController.getById)
router.post('/', authentication, ReviewController.create)
router.delete('/id/:id', authentication, ReviewController.delete)
router.put('/:id', authentication, ReviewController.update)
module.exports = router