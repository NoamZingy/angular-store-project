const mongoose = require('mongoose');
const ShoppingCart = require("../models/shoppingCart.model");
const Order = require('../models/order.model');
const CartItem = require('../models/cartItem.model');
const addCart = async ({userID}) => {
    try {
        const newCart = new ShoppingCart({userID:userID});
            return await newCart.save();
    }
    catch(err){
        throw err;
    }
}
const currentCart = async (userID) =>{
const cartsListOfUser = await Order.find({userID:userID}).map((cart)=>{
    return cart.map((item)=>item.cart)
});
const openedCart = await ShoppingCart.findOne({userID:userID,_id:{$nin:cartsListOfUser}}).populate('user');
const userResponse = {};

if(openedCart === null){
userResponse.cart = await addCart({userID:userID});
userResponse.cartItems = [];
} else{
userResponse.cart = openedCart;

try {
    userResponse.cartItems = await CartItem.find(
        {cartID:mongoose.Types.ObjectId(openedCart._id)}).populate({
            path:'product',
            select:'_id name price image categoryID'});
    } catch(error){
        console.log(error);
    }
}

/* console.log(userResponse); */
return userResponse;
}

const clearCart = async (_id) => {
    try{
   console.log(_id);
       const newCartItem = await ShoppingCart.deleteOne({_id: mongoose.Types.ObjectId(_id)})
       return newCartItem;
    }
    catch(err){
       console.log( err);
   }
   }
   


module.exports= {
    addCart,currentCart, clearCart
}