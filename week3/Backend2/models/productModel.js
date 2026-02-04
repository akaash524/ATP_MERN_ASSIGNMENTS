import { Schema,model } from "mongoose";

const productSchema=new Schema({
    pid:{
        type:Number,
        required:[true,"pid is requird"],
        min:[2,"minimum length required"]
    },
    productName:{
        type:String,
        required:[true,"name required"],
        minLength:[1,"minimum length required"],
        maxLength:[10,"maximum length requird"]
    },
    price:{
        type:Number,
        required:[true,"price requird"]
    }
},{
    strict:"throw",
})
//use only sigular nmaes
export const ProductModel=model("product",productSchema)