const express = require("express");
const cartItemSercive = require("../services/cartItems.service");
const router = express.Router();
router.post("/add",async (req,res)=>{
    try{
        const newCartItem = await cartItemSercive.addCartItem(req.body);
        return res.json(newCartItem);
    } catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
})

router.delete("/delete/:_id",async (req,res)=>{
    try{
        const newCartItem = 
        await cartItemSercive.deleteCartItem(req.params._id);
        return res.json(newCartItem);
    } catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
})

module.exports = router;