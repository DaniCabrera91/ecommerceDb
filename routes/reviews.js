const express = require('express')
const router = express.Router()
const ReviewController = require('../controllers/ReviewController')
const { authentication, isAdmin } = require('../middlewares/authentication')

router.get('/', ReviewController.getAll)
router.get('/id/:id', ReviewController.getById)
router.get('/title/:title', ReviewController.getOneByName)
router.post('/', authentication, ReviewController.create)
router.delete('/:id', authentication, isAdmin, ReviewController.delete)
// router.put('/:id', authentication, ReviewController.update)
module.exports = router