import exp from 'express'
import { userApp } from './APIS/userApi.js';
import { productApp } from './APIS/productApi.js';
import { connect } from 'mongoose'

//create app 
const app=exp()
const PORT=4000

//connect to db server
async function connectDB(){
    try{
        //connect to mongodb server
        await connect('mongodb://localhost:27017/anuragdb2')
        console.log("DB connection success")

        //assign port
        app.listen(PORT,()=>console.log("server listening on port 4000..."))

    }catch(err){
        console.log("Err in DB connection",err)
    }
}
connectDB()


app.use(exp.json())

//route to mini-app route
app.use('/user-api',userApp)
app.use('/product-api',productApp)

//error handler middle ware   (without this is show HTML code) but now handled and shown as json.

app.use((err,req,res,next)=>{
    res.status(500).json({message:"error",payload:err.message})
})