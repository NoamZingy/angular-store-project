const Order = require("../models/order.model");

const addOrder = async ({userID,cartID,city,finalPrice,street, deliveryTime, lastFourDigits }) => {
    try {
        const isDeliveryValid = await Order.find({deliveryTime: deliveryTime});
        console.log(isDeliveryValid);
        if (isDeliveryValid.length > 3) {
            return console.log("delivery not valid");
        }
        const newOrder = new Order({userID:userID,cartID:cartID,city:city,finalPrice:finalPrice,
            street:street, deliveryTime:deliveryTime, lastFourDigits:lastFourDigits });
            return await newOrder.save();
    }
    catch(err){
        throw err;
    }
}

const getAllOrders = async() =>{
    try {
        return await Order.find({});
    }
    catch(err){
        throw err;
    }
}

module.exports= {
    addOrder,
    getAllOrders
}