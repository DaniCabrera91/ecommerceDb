const { Review } = require('../models/index.js')

const ReviewController = {

 create(req, res) {
   Review.create(req.body)
     .then((Review) =>
       res.status(201).send({ message: 'Review creada con éxito', Review })
     )
     .catch(console.error)
 },

}
module.exports = ReviewController