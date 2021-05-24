const ShoppingCart = require("../models/shoppingCart.model");

const addCart = async ({userID}) => {
    try {
        const newCart = new ShoppingCart({userID:userID});
            return await newCart.save();
    }
    catch(err){
        throw err;
    }
}

module.exports= {
    addCart
}