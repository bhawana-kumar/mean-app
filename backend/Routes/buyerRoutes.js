const express = require("express");
const {getAllbuyersData, getBuyerById }= require("../controller/userController.js");
// const { verifyBuyer }= require("../utils/verifyToken.js");
const buyerRoute = express.Router();


// buyerRoute.get("/getAllBuyersData",getAllbuyersData);
// buyerRoute.get("/getBuyerById/:userId",getBuyerById, verifyBuyer);
// buyerRoute.post("/createBuyer");

module.exports = buyerRoute;                               