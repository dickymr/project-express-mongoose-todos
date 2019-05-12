const express = require('express')
const router = express.Router()
const Controller = require('../controllers/todo')

// router.get('/', (req, res) => {
//   res.send('Hello World')
// })

// router.get('/user', (req, res) => {
//   res.send('Dicky Muhamad R')
// })

router.get('/', Controller.findAll)
router.post('/', Controller.createTodo)
router.delete('/:id', Controller.deleteTodo)
router.put('/:id', Controller.updateTodo)

module.exports = router