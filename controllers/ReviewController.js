const { Review, User, Product } = require('../models/index.js')

const ReviewController = {

//CREATE: 
async create(req, res) {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'No estas autorizado' })
    }
    const userId = req.user.id
    const reviewData = { ...req.body, UserId: userId }

    const review = await Review.create(reviewData)

    res.status(201).json({
      message: 'Review created successfully',
      review,
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating review' })
  }
},

//GET ALL:
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
 
// UPDATE:
async update(req, res) {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'No estas autorizado' })
    }

    const reviewId = req.params.id
    const userId = req.user.id

    const foundReview = await Review.findByPk(reviewId)

    if (!foundReview) {
      return res.status(404).json({ message: 'Review no encontrada' })
    }

    if (foundReview.UserId !== userId) {
      return res.status(403).json({ message: 'Atención: No estas autorizado a actualizar la review' })
    }

    await foundReview.update(req.body)

    res.status(200).json({ message: 'Review actualizada con éxito' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error updating review' })
  }
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