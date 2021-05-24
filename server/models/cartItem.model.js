const {Schema,model} = require("mongoose");
const cartItem = new Schema({
    quantity: {
        type: Number, default: 1
    },
    generalPrice: Number,

    productID:{
        type:Schema.Types.ObjectId,ref:"Product"
    } ,
    cartID:{
        type:Schema.Types.ObjectId,ref:"ShoppingCart"
    }
   
},{timestamps:{createdAt:'created_at',updatedAt:'updated_at'}});

module.exports = model("cartItem",cartItem);
