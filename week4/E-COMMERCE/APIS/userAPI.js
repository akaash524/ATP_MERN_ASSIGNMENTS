import exp, { json } from 'express'
import { UserModel } from '../Models/userModel.js'
import {hash,compare} from 'bcryptjs'
import { ProductModel } from '../Models/productModel.js'
export const userApp=exp.Router()


//test route
userApp.get('/users',async(req,res)=>{
    let users=await UserModel.find()
    
    res.json({message:"users",payload:users})
})

//create user 
userApp.post('/users',async(req,res)=>{
    //get use from req
    let userObj=req.body
    //run validator to check password
    await new UserModel(userObj).validate()
    //hash the password
    let hashedPassword=await hash(userObj.password,10)
    //replace plain password with hashed pasword
    userObj.password=hashedPassword
    //create a new user doc
    let newUserDoc=new UserModel(userObj)
    //save
    await newUserDoc.save({validateBeforeSave:false})
    //res
    res.status(200).json({message:"New user added",payload:newUserDoc})

})
//add products to user cart
userApp.put('/user-cart/user-id/:uid/product-id/:pid',async(req,res)=>{
    //read uid and pid 
    let { uid,pid }=req.params
    //chech user
    let user=await UserModel.findById(uid)
    if(!user){
        return res.status(401).json({message:"User not found or Invalid user"})
    }
    //check product
    let product=await ProductModel.findById(pid)
    if(!product){
        return res.status(401).json({message:"Product not found or Invalid Product"})
    }
    //add new product to product
    let modifiedUser=await UserModel.findByIdAndUpdate(
            uid,
            {$push:{cart:{product:pid,quantity:1}}},
            {new:true}
        ).populate('cart.product cart.quantity')
    return res.status(200).json({message:"Product Added to cart",payload:modifiedUser})
})

//increase quantity
userApp.put('/user-cart/update/user-id/:uid/product-id/:pid',async(req,res)=>{
    // get params
    let { uid,pid }=req.params
    //chech user
    let user=await UserModel.findById(uid).populate('cart.product cart.quantity')
    if(!user){
        return res.status(401).json({message:"User not found or Invalid user"})
    }
    //check product
    let product=await ProductModel.findById(pid)
    if(!product){
        return res.status(401).json({message:"Product not found or Invalid Product"})
    }
    // find cart item

    // const items = user.cart
    // let item=null
    // for(let ele of items){
    //     if(ele.product._id.toString()===pid){
    //         item=ele
    //         break
    //     }
    // }

    const item=user.cart.find((e)=>e.product._id==pid)

    if (!item) {
    return res.status(404).json({ message: "Product not in cart" })
    }
    // updating qty by 1
    item.quantity += 1
    // save the document 
    await user.save()
    // return res
    res.json({message: "Quantity updated",payload: user})
})
//read user by id
userApp.get('/users/:id',async (req,res)=>{
    let userId=req.params.id
    //find user and populate product
    let user=await UserModel.findById(userId).populate('cart.product','productName price')
    // verify the user
    if(!user){
        return res.status(404).json({message:"User Not found"})
    }
    //  return res
    res.status(200).json({message:"User found",message:user})
})