// const Vehicle = require('../models/Vehicle');
const Vehicle = require("../model/vehicleModel")

exports.getVehiclesByBrand = async (req, res) => {
  try {
    

    

    const brandName = req.params.brandName;

    console.log(`Querying vehicles for brandName: ${brandName}`);
    const vehicles = await Vehicle.find({ brandName: brandName });
    console.log('Vehicles found:', vehicles);

    res.json(vehicles);
  } catch (error) {
    res.status(500).send(error);
  }
};
