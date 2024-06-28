const { Order, Product, OrderProduct } = require('../models/index.js')

const OrderController = {

//CREATE: 
 create(req, res) {
   Order.create({ ...req.body, UserId: req.user.id })
     .then((Order) => {
       Order.addProduct(req.body.ProductId)
       res.status(201).send({ message: 'Pedido creado con éxito', Order})
     })
     .catch((err) => console.error(err))
 },

// GET ALL: 
 async getAll(req, res) {
  try {
    const orders = await Order.findAll({ include: Product, through: {OrderProduct}});
    res.send(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Error a la hora de mostrar pedidos.",
    })
  }
},

 
}

module.exports = OrderController