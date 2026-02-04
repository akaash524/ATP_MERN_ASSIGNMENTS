import exp from 'express'
import { ProductModel } from '../Models/productModel.js'

export const productApp=exp.Router()


//route to create a new product
productApp.post('/products',async(req,res)=>{
    let productObj=req.body

    let productDocument=new ProductModel(productObj)

    await productDocument.save()

    res.status(200).json({message:"Product Added Sucessfully",payload:productDocument})
})

//get all products
productApp.get('/products',async(req,res)=>{
    let products=await ProductModel.find()

    res.status(200).json({message:"All products",payload:products})
})

