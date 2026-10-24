const vehicle = require("../model/vehicleModel");
const productModel = require('../model/vehicleModel')

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

const postVehicle = async (request, response) => {
    try {
        // Assuming the seller's ID is stored in the request body as sellerId
        const sellerId = request.body.sellerId;
        console.log(sellerId); // Ensure sellerId is fetched correctly
        // Create a new vehicle instance with the seller's ID attached
        const product = new productModel({
            ...request.body,
            sellerId: sellerId
        });
        // Save the new vehicle to the database
        const result = await product.save();
        response.send(result);
    } catch (error) {
        console.error('Error adding product:', error);
        response.status(500).json({ error: 'Internal server error' });
    }
}


// const updateVehicle= async (request, response) => {
//     const productId = request.params.id;
//     const updatedData = request.body;
//     try {
//         // Find the product by ID and update it with the new data
//         const result = await productModel.findByIdAndUpdate(productId, updatedData, { new: true });
//         if (!result) {
//             return response.status(404).json({ error: 'Product not found' });
//         }
//         return response.json(result);
//     } catch (error) {
//         console.error('Error editing product:', error);
//         return response.status(500).json({ error: 'Internal server error' });
//     }
// }

const deleteVehicle=  async(request,response) =>{
    const productId = request.params.id;
    try{
      //Find the product by ID and delete it.
      const result = await productModel.findByIdAndDelete(productId);
      if(!result){
          return response.status(404).json({ error : 'Product not found'})
      }
      return response.json({ message :' Product deleted successfully.'});
    } catch(error){
      console.error('Error deleting product: ', error);
      return response.status(500).json({ error :'Internal server error'})
    }
  }


  const updateVehicle = async (request, response) => {
    try {
        const productId = request.params.id;

        // Find the product by ID and update it with the new data
        const updatedProduct = await productModel.findByIdAndUpdate(productId, request.body, { new: true });

        // If the product is not found, return a 404 error response
        if (!updatedProduct) {
            return response.status(404).json({ error: 'Product not found' });
        }

        // If the product is successfully updated, send it back as a response
        response.json(updatedProduct);
    } catch (error) {
        // If an error occurs during the update process, handle it gracefully
        console.error('Error updating product:', error);
        response.status(500).json({ error: 'Internal server error' });
    }
}


  const getVehicleDataBySellerId=async (req, response) => {
    const sellerId = req.params.sellerId;
    console.log(sellerId);
    
    try {
        const result = await productModel.find({sellerId: sellerId});
        if (result) {
            response.send(result);
        } else {
            response.status(404).send("No product found with the specified sellerId");
        }
  
    } catch (error) {
        console.error("Error fetching vehicles for seller:", error);
        response.status(500).send("Internal server error");
    }
}


// const updateVehicle= async (req, res) => {
//     try {
//         const carId = req.params.vehicleId;
//         const vehicles = await vehicle.findById(carId);// Extract vehicle ID from the URL parameter
//         const { carName, driveType, engine, power } = req.body; // Extract updated vehicle data from the request body
// // console.log(id);
//         // Find the vehicle by ID
//         // let vehicles = await vehicle.findById(id);

//         if (!vehicles) {
//             return res.status(404).json({ message: 'Vehicle not found' });
//         }

//         // Update the vehicle fields
//         vehicles.carName = carName;
//         vehicles.driveType = driveType;
//         vehicles.engine = engine;
//         vehicles.power = power;

//         // Save the updated vehicle to the database
//         await vehicles.save();

//         // Respond with success message and the updated vehicle object
//         res.status(200).json({
//             message: 'Vehicle updated successfully',
//             vehicles
//         });
//     } catch (error) {
//         // If there's an error, respond with an error message
//         res.status(500).json({
//             message: 'Failed to update vehicle',
//             error: error.message
//         });
//     }
// }


module.exports={ 
    getAllVehicleData,getVehicleById,postVehicle,updateVehicle,deleteVehicle,getVehicleDataBySellerId
}


