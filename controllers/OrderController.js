const { Order, Product } = require('../models/index.js')

const OrderController = {
 create(req, res) {
   Order.create({ ...req.body, UserId: req.user.id })
     .then((Order) => {
       Order.addProduct(req.body.ProductId)
       res.status(201).send({ message: 'Pedido creado con éxito', Order})
     })
     .catch((err) => console.error(err))
 },

 async getAll(req, res) {
  try {
    const orders = await Order.findAll({
      include: [{ model: Product, attributes: ["productName"], through: { attributes: [] } }],
    });
    res.send(orders);
  } catch (error) {
    console.error(error);
  }
},

 
}

module.exports = OrderController