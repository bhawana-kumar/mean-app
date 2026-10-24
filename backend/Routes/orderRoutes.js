const express = require("express");
const orderRoute = express.Router();
const { postPayment, updateVehicleByVehicleId} = require("../Controller/orderController");

// orderRoute.get("/getAllOrderData")
orderRoute.post("/createOrder",postPayment);
// orderRoute.patch("/updateOrder/:orderId");
// orderRoute.delete("/deleteOrder/:orderId");
orderRoute.patch("/updateVehicleByVehicleId/:vehicleId",updateVehicleByVehicleId);
module.exports = orderRoute;


  