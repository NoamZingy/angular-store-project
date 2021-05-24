const Category = require("../models/category.model");

const addCategory = async ({name}) => {
    try {
        const newCategory = new Category({name:name});
            return await newCategory.save();
    }
    catch(err){
        throw err;
    }
}
// const getUser = async ({email,password}) =>{
//     try {
//         const user = await User.findOne({email:email,password:password})
//         return user;
//     }
//     catch(err){
//         throw err;
//     }
// }
module.exports= {
    addCategory
}