const express = require("express");
const shoppingCartService = require("../services/shoppingCarts.service");
const router = express.Router();
router.post("/add",async (req,res)=>{
    try{
        const newCart = await shoppingCartService.addCart(req.body);
        return res.json(newCart);
    } catch(err){
        return res.status(500).json(err);
    }
})
router.get('/lastCartOfUser', async(req,res)=>{
    try{
        const lastCart = await shoppingCartService.currentCart("60a3fdf199316537087fd0e9");
        res.json(lastCart);
    } catch(err){
        return res.status(500).json(err);
    }
})
module.exports = router;