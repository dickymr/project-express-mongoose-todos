const Todos = require('../model/todo')

module.exports = {
  findAll: async (req, res) => {
    try {
      const todo = await Todos.find()
      res.status(200).send({
        message: 'Find Success',
        data: todo
      })
    } catch (error) {
      res.status(500).send({
        message: 'Find Error'
      })
    }
  },
  createTodo: async (req, res) => {
    try {
      const todo = await Todos.create({
        text: req.body.text,
        done: false
      })
      res.status(200).send({
        message: 'Create Success',
        data: todo
      })
    } catch (error) {
      res.status(500).send({
        message: 'Create Error'
      })
    }
  },
  deleteTodo: async (req, res) => {
    try {
      const todo = await Todos.deleteOne({
        id: req.params.id
      })
      res.status(200).send({
        message: 'Delete Success',
        data: todo
      })
    } catch (error) {
      res.status(500).send({
        message: 'Delete Error'
      })
    }
  },
  updateTodo: async (req, res) => {
    try {
      const todo = await Todos.update({
        id: req.params.id
      },
        {
          $set: {
            text: req.body.text,
            done: req.body.done
          }
        })
      res.status(200).send({
        message: 'Update Success',
        data: todo
      })
    } catch (error) {
      res.status(500).send({
        message: 'Update Error'
      })
    }
  }
}




// module.exports = {
//   findAll: (req, res) => {
//     Todos.find()
//       .then(item => {
//         res.status(200).send({
//           message: 'Find Success',
//           data: item
//         })
//       })
//       .catch(error => {
//         res.status(500).send({
//           message: 'Find Error'
//         })
//       })
//   },
//   createTodo: (req, res) => {
//     Todos
//       .create({
//         text: req.body.text,
//         done: false
//       })
//       .then(item => {
//         res.status(200).send({
//           message: 'Create Success',
//           data: item
//         })
//       })
//       .catch(error => {
//         res.status(500).send({
//           message: 'Create Error'
//         })
//       })
//   },
//   deleteTodo: (req, res) => {
//     Todos
//       .deleteOne({
//         id: req.params.id
//       })
//       .then(item => {
//         res.status(200).send({
//           message: 'Delete Success',
//           data: item
//         })
//       })
//       .catch(item => {
//         res.status(500).send({
//           message: 'Delete Error'
//         })
//       })
//   },
//   updateTodo: (req, res) => {
//     Todos
//       .update({
//         id: req.params.id
//       },
//         {
//           $set: {
//             text: req.body.text,
//             done: req.body.done
//           }

//         })
//       .then(item => {
//         res.status(200).send({
//           message: 'Update Success',
//           data: item
//         })
//       })
//       .catch(error => {
//         res.status(500).send({
//           message: 'Update Error'
//         })
//       })
//   }
// }