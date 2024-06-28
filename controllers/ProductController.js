const { Product, Category } = require('../models/index.js');
const product = require('../models/product.js');

const ProductController = {

//CREATE:  

create(req, res) {
  const requiredFields = ['productName', 'price', 'CategoryId']; // Replace with your actual required fields

  const missingFields = requiredFields.filter(field => !req.body[field]);

  if (missingFields.length > 0) {
    return res.status(400).send({ message: 'Por favor rellena todos los campos' })
  }

  Product.create(req.body)
    .then((product) => {
      res.status(201).send({ message: 'Producto creado con éxito', product })
    })
    .catch((err) => {
      console.error('Error creating product:', err)
      res.status(500).send({ message: 'Error al crear producto' })
    });
},
  
//GET ALL:
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

  //GET BY ID:
  getById(req, res) {
    const { id } = req.params;
    Product.findByPk(id, { include: [Category] }) // Potential issue here
      .then((Product) => {
        if (!Product) {
          return res.status(404).send({ message: 'Producto no encontrado' });
        }
        return res.status(200).send(Product);
      })
      .catch(error => res.status(400).send({ message: 'Error al obtener el producto', error }));
  },

//GET BY NAME:
getByName(req, res) {
  const { productName } = req.params;

  console.log('Received productName:', productName);
  Product.findOne({
    where: { productName },
    include: [Category]
  })
    .then((product) => {
      if (!product) {
        console.error('Product not found:', productName)
        return res.status(404).send({ message: 'Producto no encontrado' })
      }

      console.log('Product found:', product)
      return res.status(200).send(product)
    })
    .catch(error => {
      console.error('Error obtaining product:', error)
      return res.status(500).send({ message: 'Error al obtener el producto', error })
    })
},

//GET BY PRICE:
getByPrice(req, res) {
  const { productName } = req.params;

  console.log('Received productName:', productName);
  Product.findOne({
    where: { productName },
    include: [Category]
  })
    .then((product) => {
      if (!product) {
        console.error('Product not found:', productName)
        return res.status(404).send({ message: 'Producto no encontrado' })
      }

      console.log('Product found:', product)
      return res.status(200).send(product)
    })
    .catch(error => {
      console.error('Error obtaining product:', error)
      return res.status(500).send({ message: 'Error al obtener el producto', error })
    })
},

//DELETE:  
async delete(req, res) {
  try {
    const deletedProduct = await Product.destroy({
      where: { id: req.params.id }
    });
    if (deletedProduct === 0) {
      res.status(404).send({ message: 'Producto no encontrado con el ID especificado' });
    } else {
      res.send({ message: 'El producto ha sido eliminado' });
    }
  } catch (error) {
    console.log(error);
  }
},

//UPDATE:
update(req, res) {
  const { id } = req.params;
  Product.findByPk(id)
    .then((products) => {
      if (!products) {
        return res.status(404).send({ message: 'Producto no encontrada' });
      }
      return products.update(req.body)
        .then(() => res.status(200).send({ message: 'Producto actualizado con éxito', Product }))
        .catch(error => res.status(400).send({ message: 'Error al actualizar producto', error }));
    })
    .catch(error => res.status(400).send({ message: 'Error al actualizar producto', error }));
},

}

module.exports = ProductController