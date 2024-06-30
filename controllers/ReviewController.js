const { Review, User, Product } = require('../models/index.js')

const ReviewController = {

//CREATE: 
async create(req, res) {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userId = req.user.id; // Get user ID from logged-in user
    const reviewData = { ...req.body, UserId: userId }; // Add user ID to review data

    const review = await Review.create(reviewData); // Create review

    res.status(201).json({
      message: 'Review created successfully',
      review,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating review' });
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
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const reviewId = req.params.id; // Get review ID from URL parameter
    const userId = req.user.id; // Get user ID from authenticated user

    const foundReview = await Review.findByPk(reviewId); // Find review by ID

    if (!foundReview) {
      return res.status(404).json({ message: 'Review not found' });
    }

    if (foundReview.UserId !== userId) {
      return res.status(403).json({ message: 'Forbidden: You cannot update this review' });
    }

    await foundReview.update(req.body); // Update review with request data

    res.status(200).json({ message: 'Review updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating review' });
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