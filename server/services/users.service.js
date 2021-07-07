const User = require("../models/user.model");


const addUser = async ({ID,email, password, city, street, firstName, lastName, role}) => {
    try {
       const userExist =  isUserExist(password)
       if (userExist) return 
        const userNew = new User({ID:ID,email:email,password:password,city:city,
            street:street,firstName:firstName,lastName:lastName, role: role});
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

const isUserExist = async (password) =>{
    try {
        const user = await User.findOne({password:password})
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