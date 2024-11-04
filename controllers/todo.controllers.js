const express = require('express')

const { todoModel } = require('../models/todo.models')

const addTodo = (req, res)=>{
    // console.log(req.body);
    // res.send({message:  'Todo added successfully', status :  true})

    const { name } = req.body
    const newtodo = new todoModel ({
        name        
    })

    newtodo.save()
    .then((data)=>{
        console.log(data);
        res.send({status: true, data, message: 'Todo added successfully'})
    })
    .catch((err)=>{
        console.log(err);
        res.send({status:false, message: 'Error adding todo'})
    })
}

    const allTodo = (req,res)=>{
        todoModel.find()
        .then((data)=>{
            res.send({status: true, data})
        })
        .catch((err)=>{
            res.send({status:false, message: 'Unable to fetch todo'})
            })
    }


    const editTodo =  (req,res)=>{
        const id = req.params.id
        const newTodo = req.body
        todoModel.findByIdAndUpdate(id, newTodo,  { new: true})
        .then((data)=>{
            res.send({status:true, message:"Todo Edited succesfully",data})
        })
        .catch((err)=>{
            res.send({status:false, message:'Internal server error'})
        })
    }

    const deleteTodo = (req,res)=>{
        const id  = req.params.id
        todoModel.findByIdAndDelete(id)
            .then((data) => {
                res.send({ status: true, message: 'Todo deleted succesfully', data })
            
            .catch((err)=>{
                res.send({status:false, message:'Internal server error'})
            })
    });

}



module.exports = { addTodo, allTodo, editTodo, deleteTodo }

