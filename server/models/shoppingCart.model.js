const {Schema,model} = require("mongoose");
const shoppingCart = new Schema({
    userID:{
        type:Schema.Types.ObjectId,ref:"User"
    }
   
},{timestamps:{createdAt:'created_at',updatedAt:'updated_at'}});

module.exports = model("shoppingCart",shoppingCart);
