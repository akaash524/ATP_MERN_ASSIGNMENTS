import exp from 'express'

import { connect } from 'mongoose'
import { userApp } from './APIS/userAPI.js'
import { productApp } from './APIS/productAPI.js'
// create app
const app=exp()

// DB connection fuction
async function connectDB() {

    try{
        await connect('mongodb://localhost:27017/ecomDB')
        console.log("Sucessfully connected to DB")

        app.listen(4000,()=>console.log("Server had started on port 4000..."))
    }catch(err){
        console.log("Failed to connect DB")
    }
}
// calling fun
connectDB()
//body parsing
app.use(exp.json())
//api routes
app.use('/user-api',userApp)
app.use('/product-api',productApp)

//middleware
app.use((err,req,res,next)=>{
    res.status(500).json({message:"Error",reason:err.message})
})

