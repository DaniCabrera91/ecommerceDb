const handleValidationError = (err, res) => {
    let errors = err.errors.map((el) => el.message)
    if (errors.length > 1) {
      const msgErr = errors.join(' || ')
      res.status(400).send({ messages: msgErr })
    } else {
      res.status(400).send({ messages: errors.message })
    }
   }

const typeError = (err, req, res, next) => {
   
    if (
      err.firstName === 'SequelizeValidationError' ||
      err.firstName === 'SequelizeUniqueConstraintError'
    ) {
        return (err = handleValidationError(err, res))
    } else {
      res.status(500).send({ msg: 'Hubo un problema', err: err.errors[0].message})
    }
   }
   

module.exports = { typeError }   