
const express = require("express");
const searchRoutes = express.Router();
const searchController = require("../Controller/searchController");
const vehicle = require("../model/vehicleModel");
const Product = require("../model/searchModel");



searchRoutes.get("/searchProducts", searchController.searchProducts);

module.exports = searchRoutes;
