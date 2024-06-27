const { Product, Category } = require('../models/index.js')

const ProductController = {
  create(req, res) {
    Product.create(req.body)
      .then((Product) => {
        try {
          Product.addCategory(req.body.CategoryId)
        } catch (err) {
          console.error("Error adding category:", err)
        }
        Product.addOrder(req.body.OrderId)
        res.status(201).send({ message: 'Producto creado con éxito', Product })
      })
      .catch((err) => console.error(err))
  },
  

  async getAll(req, res) {
    try {
      const products = await Product.findAll({ include: [Category] });
      res.send(products);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Error a la hora de mostrar productos.",
      })
    }
  },
async delete(req, res) {
  try {
    const deletedProduct = await Product.destroy({
      where: { id: req.params.id }
    });
       // await OrderProduct.destroy({
    //   where: { ProductId: req.params.id }
    // })
    if (deletedProduct === 0) {
      res.status(404).send({ message: 'Producto no encontrado con el ID especificado' });
    } else {
      res.send({ message: 'El producto ha sido eliminado' });
    }
  } catch (error) {
    console.log(error);
  }
},

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