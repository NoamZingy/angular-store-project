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
const getAllCategories = async() =>{
    try {
        return await Category.find({});
    }
    catch(err){
        throw err;
    }
}
module.exports= {
    addCategory,
    getAllCategories
}