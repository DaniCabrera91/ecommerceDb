const { Review, User, Product } = require('../models/index.js')

const ReviewController = {

//CREATE: 
create(req, res) {
        Review.create({ ...req.body, UserId: req.user.id })
          .then((Review) =>
            res.status(201).send({
              message: 'Publicación creada con éxito',
              Review,
            })
          )
          .catch(console.error)
      },

//GETA ALL:
getAll(req, res) {
        Review.findAll({ include: [User, Product] })
          .then((Review) => res.send(Review))
          .catch((err) => {
            console.log(err)
            res.status(500).send({
                message: 'Ha habido un problema al cargar las publicaciones',
              })
          })
      },

//GET BY ID:      
 getById(req, res) {
   Review.findByPk(req.params.id, {
     include: [{ model: User, attributes: ['firstName'] }],
   }).then((review) => res.send(review))
 },
 
//GET BY NAME 
 getOneByName(req, res) {
    Review.findOne({
      where: {
        title: {
          [Op.like]: `%${req.params.title}%`,
        },
      },
      include: [User],
    }).then((Review) => res.send(Review))
  },

//DELETE:
async delete(req, res) {
  await Review.destroy({
    where: {
      id: req.params.id,
    },
  })
  res.send('La review ha sido eliminada con éxito')
}
 
      
}
module.exports = ReviewController