const express = require('express')
const { addTodo, allTodo, editTodo, deleteTodo } = require('../controllers/todo.controllers')
const route = express.Router()

// route.get('/add-todo', addTodo)

route.post('/add-todo', addTodo)
route.get('/all-todo', allTodo)
route.put('/edit-todo/:id', editTodo)
route.delete('/delete-todo/:id', deleteTodo)


// route.get('/add-todo', (req,res)=>{
//     res.send('Hello, welcome user')
// })

module.exports = route