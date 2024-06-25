const { User, Review, Token, Sequelize } = require('../models/index.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { jwt_secret } = require('../config/config.json')['development']
const { Op } = Sequelize

const UserController = {
  async create(req, res, next) {
  try {
    const requiredFields = ['firstName', 'lastName', 'email', 'password', 'address', 'phone'];
    const missingFields = requiredFields.filter(field => !req.body[field]);

    if (missingFields.length > 0) {
      res.status(400).send({ message: 'Rellena todos los campos' })
      return
    }
    const passwordHash = await bcrypt.hashSync(req.body.password, 10)

    const user = await User.create({
      ...req.body,
      password: passwordHash,
      role: 'user' 
    });

    res.status(201).send({ message: 'Usuario creado con éxito', user })
  } catch (error) {
    console.error(error)
    next(error)
  }
},

async getAll(req, res) {
  try {
    const users = await User.findAll({ include: [Review] });
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Error a la hora de mostrar usuarios.",
    });
  }
},

async getById(req, res) {
  const userId = parseInt(req.params.id);
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error mostrando usuario' });
  }
},

async getLogged(req, res) {
  const userId = req.user.id; // Get the user ID from the decoded JWT

  try {
    const user = await User.findByPk(userId, {
      include: [
        {
          model: Order,
          include: [{ model: OrderProduct, include: ['product'] }],
        },
      ],
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving user data' });
  }
},



  async deleteById(req, res) {
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



