const express = require('express')
require('./Database/config.js')
const Task = require('./Database/taskConfig.js')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.post('/add-task',async(req,resp)=>{
    let task = new Task(req.body)
    let result = await task.save()
    resp.send(result)
})

app.get('/tasks',async (req,resp)=>{
    let task = await Task.find()
    if(task.length>0){
        resp.send(task)
    }else{
        resp.send({result:"No product found"})
    }
})

app.put('/tasks/:id',async (req,resp)=>{
    
    let result = await Task.updateOne(
        {_id:req.params.id},
        {$set:req.body}
    )
    resp.send(result)
})

app.listen(3000);