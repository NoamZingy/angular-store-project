const express = require("express");
const userService = require("../services/users.service");
const passport = require('passport');
const {isValid} = require('../passport');

const router = express.Router();

router.post("/login", passport.authenticate('local',{}), (req,res)=>{
   
    res.send({
        message:'login succeeded',
        user:req.user
    })
    // try{
    //     const user = await userService.getUser(req.body);
    //     if(user){
    //         return res.json(user);
    //     } else{
    //         return res.status(403).json("Access denied,please try again");
    //     }
    // } catch(err){
    //     return res.status(500).json(err);
    // }
})
router.get('/currentUser',isValid,(req,res)=>{
   return  res.json({
        user:req.user
    })
})

router.post("/add",async (req,res)=>{
    try{
        const newUser = await userService.addUser(req.body);
        return res.json(newUser);

    } catch(err){
        return res.status(500).json(err);

    }


})
module.exports = router;