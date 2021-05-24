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
module.exports = router;