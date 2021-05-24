const {Schema,model} = require("mongoose");
const category = new Schema({
    name:String
   
},{timestamps:{createdAt:'created_at',updatedAt:'updated_at'}});

module.exports = model("category",category);
