import exp from 'express'
import { UserModel } from '../models/userModel.js'

import { verifyToken } from '../MIDDLEWARES/verify.js'
import { hash ,compare} from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const userApp=exp.Router()

//user api routes
userApp.get('/users',async (req,res)=>{
    //read users form database
    let users=await UserModel.find()
    //let users=await UserModel.find({},{username:1,_id:0})
    res.json({message:"users",payload:users})
})


userApp.post('/users',async (req,res)=>{
    //get new user form req
    let newUser=req.body;

    //hash the password
    let hashedPassword=await hash(newUser.password,12)
    //replace the password with hashed password
    newUser.password=hashedPassword
    //craete new user document
    let newUserDoc=new UserModel(newUser)

    //save new doc
    await newUserDoc.save()
    res.json({message:"new user craeted",payload:newUserDoc})

})

//user auth route
userApp.post('/auth',async (req,res)=>{
    // ge user name and password
    let userCred=req.body
    //check user name
    let userOfDB=await UserModel.findOne({username:userCred.username})
    //if user not found
    if(userOfDB===null){
        return res.status(404).json({message:"Invalid username"})
    }
    //compare passwords
    let status=await compare(userCred.password,userOfDB.password)
    //if password not matched
    if(status===false){
        return res.status(404).json({message:"Invalid Password"})
    }
    //create the signed token
    let signedToken=jwt.sign({username:userCred.username},'abcdef',{expiresIn:30})

    //save this toaken as http only cookie
    let userCookie=res.cookie('token',signedToken,{
        httpOnly:true, //it is httpOnly cookie
        secure:false,
        sameSite:"lax"
    })

    //send res
    res.status(200).json({message:"login Success"})

})

//read user by ObjectId
userApp.get('/users/:id',async (req,res)=>{
    //get obj id from user param
    let objId=req.params.id
    // find the user uning obj id
    let userObj=await UserModel.findById(objId)

    res.status(200).json({message:"user found",payload:userObj})

})

//upadte user by id
userApp.put('/users/:id',async (req,res)=>{
    //get obj id from url
    let objId=req.params.id
    //modifiy the user
    let modifiedUser=req.body
    //make update
    let lastesUser=await UserModel.findByIdAndUpdate(objId,
        {$set:{...modifiedUser}},
        {new:true})
    //send res
    res.status(200).json({message:"user modified and retured",payload:lastesUser})
})

//delete user by id
userApp.delete('/users/:id',async (req,res)=>{
    //get obj id
    let objId=req.params.id
    //delete the user
    let deletedUser=await UserModel.findByIdAndDelete(objId)
    //send res
    res.status(200).json({message:"user deleted",payload:deletedUser})

})


//test route(protected routr)  using middle ware 
userApp.get('/test',verifyToken,(req,res)=>{
    res.json({message:"test route"})
})



