const express = require("express");
const vehicleRoute = express.Router();
const { getAllVehicleData, getVehicleById,postVehicle ,updateVehicle, deleteVehicle , getVehicleDataBySellerId} = require("../Controller/vehicleController");
const { getSellersbyId} = require("../Controller/sellerController")

vehicleRoute.get("/getAllVehicleData", getAllVehicleData);
vehicleRoute.get("/getVehicle/:vehicleId", getVehicleById);
vehicleRoute.post("/createVehicle",postVehicle); //seller authentication
vehicleRoute.put("/updateVehicle/:id",updateVehicle); //seller authentication
vehicleRoute.patch("/updateVehicle/:vehicleId",updateVehicle); //seller authentication
// vehicle.delete("/vehicles/deleteVehicle/vehicleId"); //seller authentication
vehicleRoute.delete("/deleteProduct/:id" , deleteVehicle)
vehicleRoute.get("/getVehiclesForSeller/:sellerId" , getVehicleDataBySellerId)
vehicleRoute.get("/getSellers/:id" , getSellersbyId)

module.exports = vehicleRoute;
 