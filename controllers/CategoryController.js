const { Category } = require('../models/index.js')

const CategoryController = {

 create(req, res) {
   Category.create(req.body)
     .then((Category) =>
       res.status(201).send({ message: 'Categoría creada con éxito', Category })
     )
     .catch(console.error)
 },

}
module.exports = CategoryController
