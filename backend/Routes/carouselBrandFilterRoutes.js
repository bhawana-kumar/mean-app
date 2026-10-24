const express = require('express');
const router = express.Router();
const carouselBrandFilterController = require("../Controller/carouselBrandFilterController");


router.get('/brandName/:brandName', carouselBrandFilterController.getVehiclesByBrand);

module.exports = router;
