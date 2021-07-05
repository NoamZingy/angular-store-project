const CartItem = require("../models/cartItem.model");
const mongoose = require('mongoose');
const Product = require('../models/product.model');

const addCartItem = async (cartItem) => {
    try {
        //const currentCartItem = await CartItem.findOne({cartID:mongoose.Types.ObjectId(cartItem.cartID),productID:cartItem.productID}).populate("product").select("price");
        const currentCartItem = await CartItem.findOne({ cartID:mongoose.Types.ObjectId(cartItem.cartID), product: cartItem.product });
            console.log(cartItem);
        console.log(currentCartItem);
        if(currentCartItem){
            console.log(currentCartItem);
            currentCartItem.quantity = cartItem.quantity;
            currentCartItem.generalPrice = cartItem.quantity * currentCartItem.product.price;
            return await updateCartItem(currentCartItem);
        }
        console.log(cartItem);

        const selectedProduct  = await Product.findById({_id:mongoose.Types.ObjectId(cartItem.product)});
        cartItem.generalPrice = selectedProduct.price * cartItem.quantity;
        const addedCartItem =  new CartItem(cartItem);
        return await addedCartItem.save();
    }
    catch(err){
        console.log(err);
        throw err;
    }
}
const updateCartItem = async(cartItem)=>{
    try{
        const response = await CartItem.findOneAndUpdate({_id:mongoose.Types.ObjectId(cartItem.cartID)},
        {
            $set: cartItem
        })
        return response;
    }
    catch(err){
        console.log("updateCartITem " + err);

    }
}

const deleteCartItem = async (_id) => {
 try{
console.log(_id);
    const newCartItem = await CartItem.deleteOne({_id: mongoose.Types.ObjectId(_id)})
    return newCartItem;
 }
 catch(err){
    console.log( err);
}
}


module.exports= {
    addCartItem,
    deleteCartItem, 
}