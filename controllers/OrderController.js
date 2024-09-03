const { Order, Product } = require('../models')
const moment = require('moment');

const OrderController = {
  async create(req, res) {
    try {
      if (!req.user) {
        return res.status(401).json({ message: 'No estás autorizado' });
      }
      const userId = req.user.id;
      const orderDate = moment().format('YYYY-MM-DD');
      const deliveryDate = moment().add(2, 'days').format('YYYY-MM-DD')

      const orderData = { 
        ...req.body,
        UserId: userId,
        orderDate,
        deliveryDate,
      }

      const createdOrder = await Order.create(orderData);

      res.status(201).json({
        message: 'Pedido creado con éxito',
        order: createdOrder,
      });
    } catch (error) {
      console.error('Error creando un pedido:', error);
      res.status(500).json({ message: 'Error creando un pedido' });
    }
  },

  async getAll(req, res) {
    try {
      const orders = await Order.findAll({ 
        include: [{
          model: Product, 
          attributes: ["productName"], 
          through: { attributes: [] }
        }]
      });
      res.send(orders);
    } catch (error) {
      console.error('Error obteniendo pedidos:', error);
      res.status(500).send({
        message: "Error al mostrar pedidos.",
      });
    }
  },
};

module.exports = OrderController;
