const mongoose = require("mongoose")

const taskSchema = mongoose.Schema({
Title:String,
Note:String,
Label:String
})

const Taskmodel = mongoose.model("task" , taskSchema)

module.exports  = Taskmodel