const express = require('express')
const app  = express()
const todoRoute = require('./routes/todo.route')
const cors = require("cors")
const mongoose = require('mongoose')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
require("dotenv").config()

const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI)
.then(()=>{
    console.log('Connected to MongoDb');
})
.catch((err)=>{
    console.log('error connecting to MongoDb', err);
})

const PORT = 3000

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.use('/todo', todoRoute)


// const newTodo =  new todo({
//     name: 'Olalekan',
//     email:  'olalekan@gmail.com', 
// })

// newTodo.save()
// .then(()=>{
//     console.log("Todo saved succesfully");
// })
// .catch((err)=>{
//     console.log("Error saving todo");
    
// })


app.listen(PORT, (err, res) => {
    if (res) {
        console.log(`Server is running on port  ${PORT}`)
    }
    else{
        console.log(err)
    }
})

