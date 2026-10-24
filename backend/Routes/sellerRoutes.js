const express = require("express");
// const { verifySeller }= require("../utils/verifyToken.js");
// const { getAllVehicleData, getVehicleById } = require("../controller/vehicleController.js")

const { getAllVehicleData, getVehicleById } = require("../Controller/vehicleController")
const sellerRoute = express.Router();


// userRoute.get("/users/getAllusersData",getAllusersData);


sellerRoute.get("/getVehicle/:vehicleId",getVehicleById);
// sellerRoute.post("/vehicles/createVehicle",getAllVehicleData,verifySeller); //seller authinctication
// sellerRoute.patch("/vehicles/updateVehicle/:vehicleId",getVehicleById, verifySeller); //seller authi
// sellerRoute.delete("/vehicles/deleteVehicle/:vehicleId",verifySeller); 

module.exports = sellerRoute;                               

