const {Schema,model} = require("mongoose");
const product = new Schema({
    name:String,
    price:Number,
    image:{
        type:String,
        default:'https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/green_shoppictcart_1484336527-1.png'
    }
    ,
    categoryID:{
        type:Schema.Types.ObjectId,ref:"Category"
    }
   
},{timestamps:{createdAt:'created_at',updatedAt:'updated_at'}});

module.exports = model("product",product);
