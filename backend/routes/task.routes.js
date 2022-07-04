const {Router} = require("express")
const Taskmodel = require("../models/task")

const taskRouter = Router()

taskRouter.get("/:token/tasks" , async (req,res)=>{
    const userId = req.params.userId
    const tasks = await Taskmodel.find({userId})
    res.send(tasks)
})

taskRouter.post("/:token/tasks" , async(req,res)=>{

    const userId = req.params.userId
    let payload={
        ...req.body,
        userId
    }
    console.log(req.body)
    const task = await new Taskmodel(payload)
    task.save((err,success)=>{
        if(err){
            return res.status(500).send({message:"something wrong"})
        }
        console.log("success")
        return res.status(201).send(success)
    })
    res.send("tasks stored")
})

taskRouter.delete("/:token/tasks/:token" , async(req,res)=>{

    const userId = req.params.userId
    let payload={
        ...req.body,
        userId
    }
    console.log(req.body)
    const task = await new Taskmodel(payload)
    task.save((err,success)=>{
        if(err){
            return res.status(500).send({message:"something wrong"})
        }
        console.log("success")
        return res.status(201).send(success)
    })
    res.send("tasks deleted")
})

module.exports = taskRouter
