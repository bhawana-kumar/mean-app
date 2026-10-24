const express = require("express");
const reportRoute = express.Router();
const {postReport }= require("../Controller/reportController");

reportRoute.post("/createReport",postReport);
  
module.exports = reportRoute;                               