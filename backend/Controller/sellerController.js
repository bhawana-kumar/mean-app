const vehicle = require("../model/vehicleModel");
const userModel = require('../model/userModel')
const getAllVehicleData = async (req, resp) => {
    try {
        const result = await vehicle.find();
        resp.send(result);
    } catch (error) {
        resp.status(500).send(error.message);
    }
};

const getVehicleById= async (req, resp) => {
    const carId = req.params.vehicleId;
    const result = await vehicle.findById(carId);
    console.log(carId);
    // console.log(typeof(card));
    console.log(result)
    resp.send(result);
};


const postVehicle=async (req, res) => {
    try {
        // Extract vehicle data from the request body
        const { carName, driveType, engine, power } = req.body;

        // Create a new vehicle object
        const vehicles = new vehicle({
            carName, driveType, engine, power
        });

        // Save the vehicle to the database
        await vehicles.save();

        // Respond with success message and the created vehicle object
        res.status(201).json({
            message: 'Vehicle created successfully',
            vehicles
        });
    } catch (error) {
        // If there's an error, respond with an error message
        res.status(500).json({
            message: 'Failed to create vehicle',
            error: error.message
        });
    }
}

///put req

const updateVehicle= async (req, res) => {
    try {
        const carId = req.params.vehicleId;
        const vehicles = await vehicle.findById(carId);// Extract vehicle ID from the URL parameter
        const { carName, driveType, engine, power } = req.body; // Extract updated vehicle data from the request body
// console.log(id);
        // Find the vehicle by ID
        // let vehicles = await vehicle.findById(id);

        if (!vehicles) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }

        // Update the vehicle fields
        vehicles.carName = carName;
        vehicles.driveType = driveType;
        vehicles.engine = engine;
        vehicles.power = power;

        // Save the updated vehicle to the database
        await vehicles.save();

        // Respond with success message and the updated vehicle object
        res.status(200).json({
            message: 'Vehicle updated successfully',
            vehicles
        });
    } catch (error) {
        // If there's an error, respond with an error message
        res.status(500).json({
            message: 'Failed to update vehicle',
            error: error.message
        });
    }
}

const getSellersbyId = async(request,response) => {
    const sellerId = request.params.id;
    const result = await userModel.findById(sellerId);
    response.send(result)
}




module.exports={ 
    getSellersbyId,getAllVehicleData,getVehicleById,postVehicle,updateVehicle
}


