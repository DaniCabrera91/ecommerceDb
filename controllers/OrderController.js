const { Order, Product, User } = require('../models/index.js')

const OrderController = {

//CREATE: 
async create(req, res)
    {
      const checkUser = await User.findOne({
        where: {
          id: req.body.UserId
        }
      })

      const checkProduct = await Product.findOne({
        where: {
          id: req.body.ProductId
        }
      })

      if(checkUser && checkProduct){
        await Order.create({...req.body, UserId: req.body.UserId})
        .then((order) => {
          res.status(201).send({message: 'Pedido creado', order})
          order.addProduct(req.body.ProductId)
        })
        .catch((error)=>{res.status(500).send({message: 'Error:', error})})
      } else {
        res.status(500).send({message: 'Incorrect UserId/ProductId'})
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