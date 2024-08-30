const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000;
const { typeError } = require('./middlewares/errors')

app.use(cors())


app.use(express.json())

app.use('/products', require('./routes/products'))
app.use('/categories', require('./routes/categories'))
app.use('/users', require('./routes/users'))
app.use('/orders', require('./routes/orders'))
app.use('/reviews', require('./routes/reviews'))

app.use(typeError)

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
