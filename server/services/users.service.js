const User = require("../models/user.model");


const addUser = async ({ID,email, password, city, street, firstName, lastName}) => {
    try {
        const userNew = new User({ID:ID,email:email,password:password,city:city,
            street:street,firstName:firstName,lastName:lastName});
            return await userNew.save();
    }
    catch(err){
        throw err;
    }
}
const getUser = async ({email,password}) =>{
    try {
        const user = await User.findOne({email:email,password:password})
        return user;
    }
    catch(err){
        throw err;
    }
}
module.exports= {
    addUser,
    getUser
}