const { Order, Product } = require('../models'); // Asegúrate de que el modelo Product esté correctamente importado
const moment = require('moment');

const OrderController = {
  async create(req, res) {
    try {
      if (!req.user) {
        return res.status(401).json({ message: 'No estás autorizado' });
      }

      // Verifica los datos recibidos
      console.log('Request Body:', req.body);

      const userId = req.user.id;
      const orderDate = moment().format('YYYY-MM-DD');
      const deliveryDate = moment().add(7, 'days').format('YYYY-MM-DD'); // Asegúrate de que el cálculo de fechas es el esperado

      const orderData = { 
        ...req.body,
        UserId: userId,
        orderDate,
        deliveryDate,
      };

      // Verifica los datos antes de la creación
      console.log('Order Data:', orderData);

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
