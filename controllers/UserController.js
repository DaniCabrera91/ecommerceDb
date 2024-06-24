const { User, Review, Token, Sequelize } = require('../models/index.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { jwt_secret } = require('../config/config.json')['development']
const { Op } = Sequelize

const UserController = {
  create(req, res) {
    req.body.role = 'user'
    const password = bcrypt.hashSync(req.body.password, 10)
    User.create({ ...req.body, password: password })
    // if (!firstName || !lastName || !email || !password) return res.status(400).send('Error: Falta algún campo por rellenar')
      .then((user) =>
        res.status(201).send({ message: 'Usuario creado con éxito', user })
      )
      .catch((err) => console.error(err))
  },

  getAll(req, res) {
    User.findAll({include: [Review]})
      .then((users) => res.send(users))
      .catch((err) => {
        console.log(err)
        res.status(500).send({
            message: 'Ha habido un problema al cargar las publicaciones',
          })
      })
  },

  async delete(req, res) {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    })
    await Review.destroy({
      where: {
        UserId: req.params.id,
      },
    })
    res.send('El usuario ha sido eliminado con éxito')
  },

  async update(req, res) {
    await User.update(
      { firstName: req.body.firstName, email: req.body.email },
      { where: { id: req.params.id } }
    )
    res.send('Usuario actualizado con éxito')
  },
 
 
 
  login(req, res) {
    User.findOne({ where: { email: req.body.email } }).then((user) => {
      if (!user) {
        return res.status(400).send({ message: 'Usuario o contraseña incorrectos' })
      }
      const isMatch = bcrypt.compareSync(req.body.password, user.password)
      if (!isMatch) {
        return res.status(400).send({ message: 'Usuario o contraseña incorrectos' })
      }
      const token = jwt.sign({ id: user.id }, jwt_secret)
      Token.create({ token, UserId: user.id })
      res.send({ message: 'Bienvenid@ ' + user.firstName, user, token })
     })
  },
  
  async logout(req, res) {
    try {
      await Token.destroy({
        where: {
          [Op.and]: [
            { UserId: req.user.id },
            { token: req.headers.authorization },
          ],
        },
      })
      res.send({ message: 'Desconectado con éxito' })
    } catch (error) {
      console.log(error)
      res.status(500).send({ message: 'hubo un problema al tratar de desconectarte' })
    }
  },
 
 }
 
module.exports = UserController



