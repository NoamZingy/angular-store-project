const Product = require("../models/product.model");

const addProduct = async ({name,image,price,categoryID}) => {
    try {
        const newProduct = new Product({name:name,image:image,price:price,categoryID:categoryID});
            return await newProduct.save();
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
    addProduct
}