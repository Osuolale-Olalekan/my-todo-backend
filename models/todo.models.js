const mongoose = require('mongoose')

const todoSchema = mongoose.Schema ({
    name: String, 
    date: {type: Date, default: Date.now}
})


const todoModel = mongoose.model('Todo', todoSchema)

module.exports = { todoModel }