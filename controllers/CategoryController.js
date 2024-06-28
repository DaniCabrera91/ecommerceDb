const { Category } = require('../models/index.js');

const CategoryController = {

  create(req, res) {
    Category.create(req.body)
      .then((category) =>
        res.status(201).send({ message: 'Categoría creada con éxito', category })
      )
      .catch(error => res.status(400).send({ message: 'Error al crear categoría', error }));
  },

  list(req, res) {
    Category.findAll()
      .then((categories) => res.status(200).send(categories))
      .catch(error => res.status(400).send({ message: 'Error al obtener categorías', error }));
  },

  getById(req, res) {
    const { id } = req.params;
    Category.findByPk(id)
      .then((category) => {
        if (!category) {
          return res.status(404).send({ message: 'Categoría no encontrada' });
        }
        return res.status(200).send(category);
      })
      .catch(error => res.status(400).send({ message: 'Error al obtener categoría', error }));
  },

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

  delete(req, res) {
    const { id } = req.params;
    Category.findByPk(id)
      .then((category) => {
        if (!category) {
          return res.status(404).send({ message: 'Categoría no encontrada' });
        }
        return category.destroy()
          .then(() => res.status(204).send({ message: 'Categoría eliminada con éxito' }))
          .catch(error => res.status(400).send({ message: 'Error al eliminar categoría', error }));
      })
      .catch(error => res.status(400).send({ message: 'Error al eliminar categoría', error }));
  },
};

module.exports = CategoryController;
