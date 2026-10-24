
const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  brandName: String,
  carName: String,
  manufYear: String, 
  engine: String,
  color: String,
  
});

const Vehicle = mongoose.model("car", vehicleSchema);

module.exports = Vehicle;
