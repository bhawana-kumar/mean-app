const express = require("express");
const {getAllusersData, getUserById }= require("../controller/userController.js");
// const { verifyUser }= require("../utils/verifyToken.js");
const userRoute = express.Router();


// userRoute.get("/users/getAllusersData",getAllusersData);
// userRoute.get("/users/getUserById/:userId",getUserById, verifyUser);
userRoute.get("/getAllusersData");
userRoute.get("/getUserById/:userId",getUserById);
// userRoute.post("/users/createUser");
// userRoute.put("/users/editUser/:userId");
// userRoute.patch("/users/updateUser/:userId");
// userRoute.delete("/users/deleteUser/:userId");

module.exports = userRoute;                               