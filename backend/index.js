const express = require("express")
const authRouter = require("./routes/auth.routes")
const taskRouter = require("./routes/task.routes")
const connection = require("./db")

const app = express()
app.use(express.json());

app.use("/auth" , authRouter)
app.use("/user" , taskRouter)

app.get("/" , (req,res) => {
    res.send("Welcome to app")
})


app.listen(8080 , async() => {
    try{
        await connection
        console.log("connected to db successfully")
    }
    catch{
        console.log("error occured")
    }
    console.log("server started")
})
