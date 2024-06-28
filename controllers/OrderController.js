// const { Order } = require('../models/index.js')

// const OrderController = {
//  create(req, res) {
//    Order.create({ ...req.body, UserId: req.user.id })
//      .then((Order) => {
//        Order.addProduct(req.body.ProductId)
//        res.status(201).send({ message: 'Pedido creado con éxito', Order})
//      })
//      .catch((err) => console.error(err))
//  },

 
// }

// module.exports = OrderController

const { Order, Product } = require('../models/index.js');

const OrderController = {
  // Crear una nueva orden
  create(req, res) {
    Order.create({ ...req.body, userId: req.user.id })
      .then(order => {
        order.addProduct(req.body.productId)
          .then(() => {
            res.status(201).send({ message: 'Pedido creado con éxito', order });
          });
      })
      .catch(err => res.status(500).send({ message: 'Error al crear el pedido', error: err.message }));
  },

  // Obtener todas las órdenes
  getAll(req, res) {
    Order.findAll({ include: Product })
      .then(orders => {
        res.status(200).send(orders);
      })
      .catch(err => res.status(500).send({ message: 'Error al obtener los pedidos', error: err.message }));
  },

  // Obtener una orden por ID
  getById(req, res) {
    Order.findByPk(req.params.id, { include: Product })
      .then(order => {
        if (order) {
          res.status(200).send(order);
        } else {
          res.status(404).send({ message: 'Pedido no encontrado' });
        }
      })
      .catch(err => res.status(500).send({ message: 'Error al obtener el pedido', error: err.message }));
  },

  // Actualizar una orden por ID
  update(req, res) {
    Order.findByPk(req.params.id)
      .then(order => {
        if (order) {
          order.update({ ...req.body })
            .then(updatedOrder => {
              res.status(200).send({ message: 'Pedido actualizado con éxito', order: updatedOrder });
            })
            .catch(err => res.status(500).send({ message: 'Error al actualizar el pedido', error: err.message }));
        } else {
          res.status(404).send({ message: 'Pedido no encontrado' });
        }
      })
      .catch(err => res.status(500).send({ message: 'Error al actualizar el pedido', error: err.message }));
  },

  // Eliminar una orden por ID
  delete(req, res) {
    Order.findByPk(req.params.id)
      .then(order => {
        if (order) {
          order.destroy()
            .then(() => {
              res.status(204).send();
            })
            .catch(err => res.status(500).send({ message: 'Error al eliminar el pedido', error: err.message }));
        } else {
          res.status(404).send({ message: 'Pedido no encontrado' });
        }
      })
      .catch(err => res.status(500).send({ message: 'Error al eliminar el pedido', error: err.message }));
  }
};

module.exports = OrderController;
