import { Schema,model } from "mongoose";

//cart schema
const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:'product'   //Name of ProductModel,
    },
    quantity:{
        type:Number,
    }
})


const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Eamil required"],
        unique:true //add to index
    },
    password:{
        type:String,
        required:[true,"Pasword is required"],

    },
    cart:{
        type:[cartSchema]
    }
})

export const UserModel=model('user',userSchema)