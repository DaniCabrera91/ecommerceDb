const { Review, User } = require('../models/index.js')

const ReviewController = {

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

getAll(req, res) {
        Review.findAll({ include: [User] })
          .then((Review) => res.send(Review))
          .catch((err) => {
            console.log(err)
            res.status(500).send({
                message: 'Ha habido un problema al cargar las publicaciones',
              })
          })
      },

 getById(req, res) {
   Review.findByPk(req.params.id, {
     include: [{ model: User, attributes: ['firstName'] }],
   }).then((review) => res.send(review))
 },
     
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