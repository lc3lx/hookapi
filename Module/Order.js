const mongoose = require("mongoose")

const orderschema = mongoose.Schema(
    {
         
        event:{
            type:String
        },
        merchant:{
            type:Number
        },created_at:{
            type:String},

         data:{
            type:Object
         }

     
    
    }
)
const Order = mongoose.model("Order",orderschema)
module.exports = Order
