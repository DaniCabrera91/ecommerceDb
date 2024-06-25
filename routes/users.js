const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const { authentication, isAdmin } = require('../middlewares/authentication')

router.post('/', UserController.create)
router.get('/', UserController.getAll)
router.get('/id/:id', UserController.getById)
router.get('/loggedUser', authentication, UserController.getLogged)

router.delete('/id/:id', authentication, isAdmin, UserController.deleteById)
router.put('/:id', authentication, UserController.update)

router.post('/login', UserController.login)
router.delete('/logout', authentication, UserController.logout)

module.exports = router