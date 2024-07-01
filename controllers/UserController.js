const { User, Review, Token, Sequelize, Order, Product } = require('../models/index.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { jwt_secret } = require('../config/config.json')['development']
const { Op } = Sequelize

const UserController = {

  // CREATE:
  async create(req, res, next) {
    try {
      const requiredFields = ['firstName', 'lastName', 'email', 'password', 'address', 'phone']
      const missingFields = requiredFields.filter(field => !req.body[field])
  
      if (missingFields.length > 0) {
        res.status(400).send({ message: 'Rellena todos los campos obligatorios'})
        return
      }
  
      // email REGEX
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(req.body.email)) {
        res.status(400).send({ message: 'Formato de email incorrecto' })
        return;
      }
  
      const passwordHash = await bcrypt.hashSync(req.body.password, 10)
  
      const user = await User.create({
        ...req.body,
        password: passwordHash,
        role: 'user'
      })
  
      res.status(201).send({ message: 'Usuario creado con éxito', user })
    } catch (error) {
      console.error(error)
      next(error)
    }
  },

// UPDATE:
update(req, res) {
  const { id } = req.params
  User.findByPk(id)
    .then((users) => {
      if (!users) {
        return res.status(404).send({ message: 'Usuario no encontrado' })
      }
      return products.update(req.body)
        .then(() => res.status(200).send({ message: 'Usuario actualizado con éxito', Product }))
        .catch(error => res.status(400).send({ message: 'Error al actualizar usuario', error }))
    })
    .catch(error => res.status(400).send({ message: 'Error al actualizar usuario', error }))
},

// GET ALL:
async getAll(req, res) {
  try {
    const users = await User.findAll({ include: [{
      model: Order,
    }],
  })
    res.send(users)
  } catch (error) {
    console.error(error)
    res.status(500).send({
      message: "Error a la hora de mostrar usuarios.",
    });
  }
},

// GET BY ID:
async getById(req, res) {
  const userId = parseInt(req.params.id);
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    res.json({ user })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error mostrando usuario' })
  }
},


// GET LOGGED:
async getLogged(req, res) {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' })
    }
    const userId = req.user.id;
    const user = await User.findByPk(userId, {
      attributes: ['id', 'firstName', 'email'], // Specify user attributes to include
      include: [{
        model: Order,
        include: [Product],
      }],
    });

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(400).json({ message: 'Unique constraint violated' })
    } else {
      res.status(500).json({ message: 'Error recogiendo los datos del usuario' })
    }
  }
},

// DELETE BY ID:
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
 
// LOGIN:
async login(req, res) {
  try {
    const user = await User.findOne({ where: { email: req.body.email } })

    if (!user) {
      return res.status(400).json({ message: 'Usuario o contraseña incorrectos' })
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Usuario o contraseña incorrectos' })
    }

    const existingToken = await Token.findOne({
      where: { UserId: user.id },
    });

    if (existingToken) {
      return res.status(200).json({
        message: 'Error a la hora de loguearte: Ya estás loggead@',
      });
    }

    const newToken = jwt.sign({ id: user.id }, jwt_secret);
    await Token.create({ token: newToken, UserId: user.id });

    res.status(200).json({
      message: 'Bienvenid@ ' + user.firstName,
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el logging' });
  }
},

// LOGOUT:
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



