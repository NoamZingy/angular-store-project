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
userResponse.cartItems = await CartItem.find({cartID:openedCart._id});
}
}



module.exports= {
    addCart,currentCart
}