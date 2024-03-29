require('dotenv').config()

const mongoose = require('mongoose')

const MONGODB_CONNECTION = process.env.MONGODB_URL || 'mongodb://localhost:27017/todos'

mongoose.set('useCreateIndex', true)

mongoose.connect(MONGODB_CONNECTION, {
  useNewUrlParser: true
})

module.exports = mongoose