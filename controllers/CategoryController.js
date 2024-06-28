const { Category, Product } = require('../models/index.js')

const CategoryController = {

//CREATE: 
 create(req, res) {
   Category.create(req.body)
     .then((Category) =>
       res.status(201).send({ message: 'Categoría creada con éxito', Category })
     )
     .catch(error => res.status(400).send({ message: 'Error al crear categoría', error }))
 },

//UPDATE: 
 update(req, res) {
  const { id } = req.params;
  Category.findByPk(id)
    .then((category) => {
      if (!category) {
        return res.status(404).send({ message: 'Categoría no encontrada' });
      }
      return category.update(req.body)
        .then(() => res.status(200).send({ message: 'Categoría actualizada con éxito', category }))
        .catch(error => res.status(400).send({ message: 'Error al actualizar categoría', error }));
    })
    .catch(error => res.status(400).send({ message: 'Error al actualizar categoría', error }));
},

//DELETE:
async delete(req, res) {
  try {
    const deletedCategory = await Category.destroy({
      where: { id: req.params.id }
    });
    if (deletedCategory === 0) {
      res.status(404).send({ message: 'Categoría no encontrada con el ID especificado' });
    } else {
      res.send({ message: 'La categoría ha sido eliminada con éxito' });
    }
  } catch (error) {
    console.log(error);
  }
},

// GET ALL: 
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

//GET BY ID:
getById(req, res) {
  const { id } = req.params;
  Category.findByPk(id ,{ include: [Product] })
    .then((category) => {
      if (!category) {
        return res.status(404).send({ message: 'Categoría no encontrada' });
      }
      return res.status(200).send(category);
    })
    .catch(error => res.status(400).send({ message: 'Error al obtener categoría', error }));
},

//GET BY NAME:
getByName(req, res) {
  const { categoryName } = req.params
  Category.findOne({
    where: { categoryName},
    include: [Product]
  })
    .then((category) => {
      if (!category) {
        return res.status(404).send({ message: 'Categoría no encontrada' });
      }
      return res.status(200).send(category);
    })
    .catch(error => res.status(400).send({ message: 'Error al obtener categoría', error }));
},

}
module.exports = CategoryController

