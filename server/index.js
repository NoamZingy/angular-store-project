const express = require ("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./db/config");
const userController = require("./controllers/users.controller");
const categoryController = require("./controllers/categories.controller");
const productController = require("./controllers/products.controller");
const shoppingCartController = require("./controllers/shoppingCarts.controller");
const cartItemController = require("./controllers/cartItems.controller");
const orderController = require("./controllers/orders.controller");

app.use(cors());
app.use(express.json());

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


