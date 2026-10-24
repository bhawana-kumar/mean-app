const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    identification_number: { type: String, required: true },
    registration_number: { type: String, required: false },
    carName: { type: String, required: false},
    brandName: { type: String, required: true },
    manufYear: { type: String, required: true },
    ownerShip: { type: String, required: true },
    carImg: { type: String, required: true },
    price: { type: String, required: true },
    engine: { type: String, required: false },
    power: { type: String, required: false },
    torque: { type: String, required: false },
    seatingCapacity: { type: String, required: false },
    driveType: { type: String, required: false },
    mileage: { type: String, required: false },
    tags: [{ type: String }],
    sellerId: { type: mongoose.Schema.Types.ObjectId , ref: 'User', required: true },
    bodyType: { type: String, required: false },
    fuelType: { type: String, required: false },
    description: { type: String, required: false },
    color: { type: String, required: false },
    status: {
        type: String,
        default: "available"
      },
    location: { type: String, required: false }
});

module.exports = mongoose.model("vehicles", vehicleSchema);
