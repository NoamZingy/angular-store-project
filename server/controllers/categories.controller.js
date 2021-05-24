const express = require("express");
const categoryService = require("../services/categories.service");
const router = express.Router();
router.post("/add",async (req,res)=>{
    try{
        const newCat = await categoryService.addCategory(req.body);
        return res.json(newCat);

    } catch(err){
        return res.status(500).json(err);
    }


})
module.exports = router;