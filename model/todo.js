const mongoose = require('../config/todo')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const todoSchema = mongoose.Schema(
  {
    text: String,
    done: Boolean
  },
  {
    timestamps: true
  }
)

todoSchema.plugin(AutoIncrement, {
  id: 'todos_counter',
  inc_field: 'id'
})

const Todos = mongoose.model('Todos', todoSchema)

module.exports = Todos