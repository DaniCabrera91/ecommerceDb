const { Category, Product } = require('../models/index.js')

const CategoryController = {

 create(req, res) {
   Category.create(req.body)
     .then((Category) =>
       res.status(201).send({ message: 'Categoría creada con éxito', Category })
     )
     .catch(console.error)
 },

 async getAll(req, res) {
  try {
    const categories = await Category.findAll({ include: [Product] });
    res.send(categories);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Error a la hora de mostrar categorías.",
    })
  }
},

}
module.exports = CategoryController
