const mongoose = require("mongoose");
const Schema= mongoose.Schema;


const orderSchema = new mongoose.Schema({
  dateTime: { type: Date, required: true },
  buyerId: { type: String, required: true },
  buyer: {
    name: { type: String, required: true },
    contactNumber: { type: String, required: true },
    address: { type: String, required: true }
  },
  sellerId: { type: String, required: true },
  seller: {
    name: { type: String, required: true },
    contactNumber: { type: String, required: true },
    address: { type: String }
  },
  vehicleId: { type: String, required: true },
  vehicle: {
    registrationNumber: { type: String, required: true },
    VIN: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: String },
    mileage: { type: String, required: true },
    color: { type: String, required: true }
  },
  price: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  orderStatus: { type: String, required: true }
});


module.exports = mongoose.model('orders', orderSchema)

