const express = require("express");
const paymentRoute = express.Router();
const { postPayment,updateStatus} = require("../Controller/paymentController");

paymentRoute.post("/createPayment",postPayment); 
module.exports = paymentRoute;
  