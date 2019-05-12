require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const todoRouter = require('./routes/todo')

app.use(express.json()) // BODY PARSER
app.use(cors()) // CORS
app.use(morgan('dev')) // MORGAN

// app.use('/', (req, res) => {
//   res.send('Hello World')
// })

app.use('/', todoRouter)

app.listen(3000, () => {
  console.log('Port 3000')
})