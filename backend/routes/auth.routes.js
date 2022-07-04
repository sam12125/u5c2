const {Router} = require("express")
const Usermodel = require("../models/user")
const { v4: uuidv4 } = require("uuid");

const newId = uuidv4();

const authRouter = Router()

authRouter.post("/signup" , async(req,res) => {
    console.log(req.body)
    const user = await new  Usermodel(req.body)
    user.save((err,success) => {
        if(err){
            res.status(500).send({message : "error"})
        }
        return res.status(201).send({message : "Signed up successfully" , token:newId})
    })
    res.status(201).send({message : "Signed up successfully" , token:newId})
    // res.send("Signed up successfully")
})

authRouter.post("/login" , async(req,res) => {
    // console.log(req.body)
    const checkUser = await Usermodel.find(req.body).lean()  //lean-to remove extra things which came from mongo
    console.log(checkUser)
    if(checkUser.length >= 1){
        let {name,_id} = checkUser[0]
        let payload = {
           name,
           _id,
            token
        }
        res.send(payload)
    }
    
    res.send({message:"wrong credentials"})
})

module.exports = authRouter