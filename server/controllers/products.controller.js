const express = require("express");
const productService = require("../services/products.service");
const router = express.Router();
router.post("/add",async (req,res)=>{
    try{
        const newProduct = await productService.addProduct(req.body);
        return res.json(newProduct);
    } catch(err){
        return res.status(500).json(err);
    }
})
router.get('/',async (req,res)=>{
    try{
        const products = await productService.getAllProducts();
        return res.json(products);
    }
    catch(err){
        return res.status(500).json(err);
    }
})
router.get('/:categoryID',async (req,res)=>{
    try{
        const products = await productService.getAllProductsByCategoryID(req.params.categoryID);
        return res.json(products);
    }
    catch(err){
        return res.status(500).json(err);
    }
})
router.put("/update",async (req,res)=>{
    try{
        const updatedProduct = await productService.updateProduct(req.body);
        return res.json(updatedProduct);
    } catch(err){
        return res.status(500).json(err);
    }
})
module.exports = router;