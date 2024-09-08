const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000;
const { typeError } = require('./middlewares/errors')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const multer = require('multer')

cloudinary.config({
    cloud_name: 'dhn4hwunj',
    api_key: '879184289568791',
    api_secret: '0C95qm-asi74Ebrie7KjpHW12as',
    })
    
    const storage = new CloudinaryStorage({
        cloudinary,
        params: {
        folder: 'ecommerce_img',
        },
        })

        const upload = multer({ storage })


app.use(cors())


app.use(express.json())

app.use('/products', require('./routes/products'))
app.use('/categories', require('./routes/categories'))
app.use('/users', require('./routes/users'))
app.use('/orders', require('./routes/orders'))
app.use('/reviews', require('./routes/reviews'))

app.use(typeError)

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))

app.post('/upload', upload.single('picture'), (req, res) => {
    res.status(200).json({
    url: req.file,
    })
    })
    
    