const express = require('express')
const router = express.Router()
const ReviewController = require('../controllers/ReviewController')

router.post('/', ReviewController.create)

module.exports = router