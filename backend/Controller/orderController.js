const Payment = require("../model/orderModel");
const vehicleModel = require('../model/vehicleModel');
const postPayment = async (req, res) => {
    try {
        console.log('Request Body:', req.body);
        const {
            dateTime,
            buyerId,
            buyer,
            sellerId,
            seller,
            vehicleId,
            vehicle,
            price,
            paymentMethod,
            orderStatus
          } = req.body;

          const payments = new Payment({
            dateTime: dateTime, // Assuming you want to set the current date and time
            buyerId: buyerId,
            buyer: buyer,
            sellerId: sellerId,
            seller: seller,
            vehicleId: vehicleId,
            vehicle: vehicle,
            price: price,
            paymentMethod: paymentMethod,
            orderStatus: orderStatus
          });
        console.log(payments);
        await payments.save();

        res.status(201).json({
            message: 'Payment created successfully',
            payment: payments
        });
    } catch (error) {
        console.error('Error creating payment:', error);
        res.status(500).json({
            message: 'Failed to create payment',
            error: error.message
        });
    }
};

const updateVehicleByVehicleId = async (req, res) => {
    try {
        const vehicleId = req.params.vehicleId;
        const updates = req.body;

        const updatedVehicle = await vehicleModel.findByIdAndUpdate(vehicleId, updates, { new: true });

        if (!updatedVehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.json({ message: 'Vehicle updated successfully', updatedVehicle });
    } catch (error) {
        console.error('Error updating Vehicle:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { postPayment,updateVehicleByVehicleId }; 