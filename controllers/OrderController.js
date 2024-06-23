const { Order } = require('../models/index.js')

const OrderController = {
 create(req, res) {
   Order.create({ ...req.body, UserId: req.user.id })
     .then((Order) => {
       Order.addProduct(req.body.ProductId)
       res.status(201).send({ message: 'Pedido creado con éxito', Order})
     })
     .catch((err) => console.error(err))
 },

 
}

module.exports = OrderController