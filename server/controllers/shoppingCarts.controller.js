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
module.exports = router;