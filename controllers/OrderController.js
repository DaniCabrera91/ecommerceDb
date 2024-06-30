const { Order, Product, User } = require('../models/index.js')

const OrderController = {

//CREATE: 
async create(req, res) {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' })
    }
    const userId = req.user.id
    const orderData = { ...req.body }
    const createdOrder = await Order.create({ ...orderData, UserId: userId })

    await createdOrder.addProduct(req.body.ProductId)

    res.status(201).json({
      message: 'Order created successfully',
      order: createdOrder,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating order' })
  }
},

// GET ALL: 
 async getAll(req, res) {
  try {
    const orders = await Order.findAll({ 
      include: [{
          model: Product, attributes:["productName"], through: {attributes: []}
      }]
      })
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