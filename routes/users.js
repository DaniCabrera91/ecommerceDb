const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const { authentication } = require('../middlewares/authentication')

router.post('/', UserController.create)
router.get('/', authentication, UserController.getAll)
router.delete('/:id', authentication, UserController.deleteById)
router.put('/:id', authentication, UserController.update)

router.post('/login', UserController.login)
router.delete('/logout', authentication, UserController.logout)

module.exports = router