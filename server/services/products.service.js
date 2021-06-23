const { Mongoose } = require("mongoose");
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



const updateProduct = async (_id ,{name,image,price,categoryID}) => {
    try {
        const updatedProduct = await Product.updateOne({_id: _id}, {$set: {name:name,
             image:image, price:price,
             categoryID:categoryID}});
             console.log(updatedProduct);
        return updatedProduct;

    }
    catch(err){
        throw err;
    }
}
 const getAllProducts = async() =>{
     try {
         return await Product.find({});
     }
     catch(err){
         throw err;
     }
 }
 const getAllProductsByCategoryID = async(categoryID) =>{
    try {
        return await Product.find({categoryID:categoryID});
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
    addProduct,
    getAllProducts,
    getAllProductsByCategoryID,
    updateProduct,
}