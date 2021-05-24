const {Schema,model} = require("mongoose");
const order = new Schema({
   
    userID:{
        type:Schema.Types.ObjectId,ref:"User"
    },
    cartID:{
        type:Schema.Types.ObjectId,ref:"ShoppingCart"
    },
    city:String,

    finalPrice:Number,

    street:String,

    deliveryTime:Date,

   lastFourDigits:Number

},{timestamps:{createdAt:'created_at',updatedAt:'updated_at'}});

module.exports = model("order",order);
