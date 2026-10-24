const Payment = require("../model/paymentModel");

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
            year: year,
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

// const updateStatus= async (req, res) => {
//     const { vehicleId } = req.params;
//     // Update the vehicle status to sold in the database based on the vehicleId
//     await Vehicle.findByIdAndUpdate(vehicleId, { status: 'sold' }, { new: true }, (err, updatedVehicle) => {
//       if (err) {
//         return res.status(500).json({ error: 'Error updating vehicle status' });
//       }
//       res.json(updatedVehicle);
//     });
//   };
// const postPayment = async (req, res) => {
//     try {
//         console.log('Request Body:', req.body); 
//         const { paymentId, amount, currency, customerName, customerEmail, customerContact, paymentStatus } = req.body;

//         const payments = new Payment({
//             paymentId, amount, currency, customerName, customerEmail, customerContact, paymentStatus
//         });
// console.log(payments);
//         await payments.save();

//         res.status(201).json({
//             message: 'Payment created successfully',
//             payment: payments 
//         });
//     } catch (error) {
//         console.error('Error creating payment:', error);
//         res.status(500).json({
//             message: 'Failed to create payment',
//             error: error.message
//         });
//     }
// };

module.exports = { postPayment }; 
