const express = require("express");
const ordersService = require("../services/orders.service");
const router = express.Router();
router.post("/add",async (req,res)=>{
    try{
        const newOrder = await ordersService.addOrder(req.body);
        return res.json(newOrder);
    } catch(err){
        return res.status(500).json(err);
    }
})



router.get('/',async (req,res)=>{
    try{
        const orders = await ordersService.getAllOrders();
        return res.json(orders);
    }
    catch(err){
        return res.status(500).json(err);
    }
})

module.exports = router;