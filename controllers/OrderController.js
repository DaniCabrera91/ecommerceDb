const { Order, Product } = require('../models');
const moment = require('moment');

const OrderController = {
  async create(req, res) {
    try {
      if (!req.user) {
        return res.status(401).json({ message: 'No estás autorizado' });
      }

      const userId = req.user.id;
      const orderDate = moment().format('YYYY-MM-DD');
      const deliveryDate = moment().add(2, 'days').format('YYYY-MM-DD');

      // Asegurarnos de recibir los detalles del pedido desde el frontend
      const { productIds, productNames, productPrices, categoryIds } = req.body;
      if (!productIds || productIds.length === 0) {
        return res.status(400).json({ message: 'Debe proporcionar los productos para el pedido.' });
      }

      // Crear el pedido con los detalles adicionales (names, prices, categoryIds)
      const createdOrder = await Order.create({
        UserId: userId,
        orderDate,
        deliveryDate,
        productIds,
        productNames,
        productPrices,
        categoryIds,
      });

      // Buscar los productos por sus IDs
      const products = await Product.findAll({
        where: {
          id: productIds,
        },
      });

      if (!products || products.length === 0) {
        return res.status(400).json({ message: 'Productos no válidos.' });
      }

      // Asociar productos con el pedido (tabla intermedia)
      await createdOrder.addProducts(products);

      res.status(201).json({
        message: 'Pedido creado con éxito',
        order: createdOrder,
        products: products.map(p => p.productName), // Enviar los nombres de productos como respuesta
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
