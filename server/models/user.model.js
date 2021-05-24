const {Schema,SchemaTypes,model} = require("mongoose");
require("mongoose-type-email");
const user = new Schema({
    email:{
        type:SchemaTypes.Email,
        required:true,
        unique:true,
    },
    ID:{
        required:true,
        unique:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    firstName:{
        required:true,
        type:String
    },
    lastName:{
        required:true,
        type:String
    },
    city:{
        required:true,
        type:String
    },
    street:{
        required:true,
        type:String
    },
    role:{
        type:String,
        default:'client',
        enum:["client","admin"]
    }
   
},{timestamps:{createdAt:'created_at',updatedAt:'updated_at'}});

module.exports = model("user",user);
