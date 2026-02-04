import { Schema,model } from "mongoose";

const productSchema=new Schema({
    productName:{
        type:String,
        required:[true,"Product name required"],
    },
    price:{
        type:Number,
        required:[true,"Price is required"]
    },
    brand:{
        type:String,
        required:[true,"Brand is required"]
    }
    
},{
    strict:"throw",
    timestamps:true,
    versionKey:false
})

export const ProductModel=model('product',productSchema)