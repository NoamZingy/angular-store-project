const express = require ("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const cors = require("cors");
const config = require("./db/config");
const passportAuth = require('./passport');
const userController = require("./controllers/users.controller");
const categoryController = require("./controllers/categories.controller");
const productController = require("./controllers/products.controller");
const shoppingCartController = require("./controllers/shoppingCarts.controller");
const cartItemController = require("./controllers/cartItems.controller");
const orderController = require("./controllers/orders.controller");

app.use(cors());
app.use(session({secret:'myshoppingcart',resave: true,saveUninitialized:true}));


app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// app.use(express.urlencoded({extended:true}));
app.use(passport.initialize());
app.use(passport.session());

passport.use("local",new LocalStrategy({usernameField:'email',passwordField:'password'},passportAuth.localStrategyHandler));
passport.serializeUser(passportAuth.serializeUser);
passport.deserializeUser(passportAuth.deserializeUser);

app.use("/api/user",userController)
app.use("/api/category",categoryController)
app.use("/api/product",productController)
app.use("/api/shoppingCart",shoppingCartController)
app.use("/api/cartItem",cartItemController)
app.use("/api/order",orderController)
app.use('/',(req,res)=>{
    res.send("Welcome");
})
const init = async ()=>{
    try{
        const connectMongoose = await mongoose.connect(config.dbConfiguration.url,{
            useUnifiedTopology:true,
            useNewUrlParser: true,
            useFindAndModify:false,
            useCreateIndex: true
        });
        app.listen('3000',(err)=>{
            console.log("Server is up");
        })
    }
    catch(err){
        console.log(err);
    }
}

init();


