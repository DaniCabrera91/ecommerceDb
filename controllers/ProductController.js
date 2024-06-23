const { Product } = require('../models/index.js')

const ProductController = {
 create(req, res) {
   Product.create(req.body)
     .then((Product) => {
       Product.addCategory(req.body.CategoryId),
       Product.addOrder(req.body.OrderId)
       res.status(201).send({ message: 'Producto creado con éxito', Product})
     })
     .catch((err) => console.error(err))
 },

//  async getAll(req, res) {
//    try {
//      const products = await Product.findAll({
//        include: [{ model: Order, through: { attributes: [] } }]
//      })
//      res.send(products)
//    } catch (error) {
//      console.error(error)
//    }
//  },

//  async delete(req, res) {
//   try {
//     await Product.destroy({
//       where: { id: req.params.id }
//     })
//     await OrderProduct.destroy({
//       where: { ProductId: req.params.id }
//     })
//     res.send({ message: 'El producto ha sido eliminada' })
//   } catch (error) {
//     console.log(error)
//   }
// },

// async update(req, res) {
//   try {
//     await Product.update(req.body, {
//       where: { id: req.params.id }
//     })
//     const product = await Product.findByPk(req.params.id)
//     product.setOrders(req.body.OrderId)
//     res.send('Producto actualizado con éxito')
//   } catch (error) {
//     console.error(error)
//     res.status(500).send({ message: 'no ha sido posible actualizar el producto' })
//   }
// }

}


module.exports = ProductController