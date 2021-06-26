const {Schema,model} = require("mongoose");
const cartItem = new Schema({
    quantity: {
        type: Number, default: 1
    },
    generalPrice: Number,

    product:{
        type:Schema.Types.ObjectId,ref:"product"
    } ,
    cartID:{
        type:Schema.Types.ObjectId,ref:"ShoppingCart"
    }
   
},{timestamps:{createdAt:'created_at',updatedAt:'updated_at'}});

module.exports = model("cartItem",cartItem);
