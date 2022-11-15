// Aquí tendremos la lógica
// y la configuración de express

const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

// const router = require('./routes/route.js')
// app.use(router)
app.use(require('./routes/route.js'))

module.exports = app