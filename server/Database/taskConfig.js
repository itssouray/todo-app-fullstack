const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title:String,
    description:String,
    type:String,
    status:Boolean,
    time:String
})

module.exports = mongoose.model('task',taskSchema)