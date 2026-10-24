
// const{createError }=require('../utils/error')
// const { createSuccess} = require('../utils/success');
const express = require('express');
const cors = require('cors');
const userModel = require('../model/userModel');
const orderModel = require('../model/orderModel');
const vehicleModel = require('../model/vehicleModel');
const reportModel = require('../model/reportModel');
const sellerModel = require('../model/sellerModel');

const app = express();
app.use(cors());

// Get all Users
const getAllUserData = async (req, res) => {
    try {
        // Use your userModel to find users
        const result = await userModel.find();
        if (!result) {
            return res.status(404).json({ message: "Users not found" })
        }

        res.send(result);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// GET user by ID
const getUserById = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// PATCH request to update an existing user
const updateUserById = async (req, res) => {
    try {
        const userId = req.params.userId;
        const updates = req.body;

        const updatedUser = await userModel.findByIdAndUpdate(userId, updates, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User updated successfully', updatedUser });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// POST request to create a new user
// app.post('/admin/createUser', async (req, res) => {
//     try {
//         const userData = req.body;

//         // Use your userModel to create a new user
//         const newUser = await userModel.create(userData);

//         res.status(201).json({ message: 'User created successfully', newUser });
//     } catch (error) {
//         console.error('Error creating user:', error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// });
//delete user data

const deleteUserById = async (req, res) => {
    try {
        const userId = req.params.userId;
        const deletedUser = await userModel.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully', deletedUser });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


// Orders
// get all orders data
const getAllOrdersData = async (req, res) => {
    try {
        // Use your userModel to find users
        const result = await orderModel.find();
        if (!result) {
            return res.status(404).json({ message: "Users not found" })
        }
        res.send(result);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
// GET order by ID 
const getOrderById = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const order = await orderModel.findById(orderId);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.json(order);
    } catch (error) {
        console.error('Error fetching order:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
// Get order by buyerid
const getOrderByBuyerId = async (req, res) => {
    try {
        const userId = req.params.userId;
        const orders = await orderModel.find({ buyerId: userId });

        if (!orders) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.json(orders);
    } catch (error) {
        console.error('Error fetching order:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
const getOrderBySellerId = async (req, res) => {
    try {
        const userId = req.params.userId;
        const orders = await orderModel.find({ sellerId: userId });

        if (!orders) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.json(orders);
    } catch (error) {
        console.error('Error fetching order:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
const getOrderDataByVehicleId = async (req, res) => {
    try {
        const vehicleId = req.params.vehicleId;
        const order = await orderModel.findOne({ vehicleId: vehicleId });

        if (!order) {
            return res.status(404).json({ message: 'order not found' });
        }
        res.json(order);
    } catch (error) {

        console.error('Error fetching order:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


// Vehicles
// Get vehicles all Data 
const getAllVehicleData = async (req, res) => {
    try {
        // Use your userModel to find users
        const result = await vehicleModel.find();
        if (!result) {
            return res.status(404).json({ message: "vehicles not found" })
        }

        res.send(result);
    } catch (error) {
        console.error('Error fetching vehicles:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getVehicleDataBySellerId = async (req, res) => {
    try {
        const sellerId = req.params.userId;
        const vehicles = await vehicleModel.find({ sellerId: sellerId });

        if (!vehicles) {

            return res.status(404).json({ message: 'vehicle not found' });
        }
        res.json(vehicles);
    } catch (error) {

        console.error('Error fetching vehicle:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
const updateVehicleBySellerId = async (req, res) => {
    try {
        const sellerId = req.params.sellerId;
        const updates = req.body;

        const updatedVehicle = await vehicleModel.updateMany({sellerId:sellerId}, updates, { new: true });

        if (!updatedVehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.json({ message: 'Vehicle updated successfully', updatedVehicle });
    } catch (error) {
        console.error('Error updating Vehicle:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getVehicleDataById = async (req, res) => {
    try {
        const vehicleId = req.params.vehicleId;
        const result = await vehicleModel.findById(vehicleId);
        if (!result) {

            return res.status(404).json({ message: 'vehicle not found' });
        }
        res.json(result);
    } catch (error) {

        console.error('Error fetching vehicle:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const deleteVehicleById = async (req, res) => {
    try {
        const vehicleId = req.params.vehicleId;
        const result = await vehicleModel.deleteOne({ _id: vehicleId });
        if (!result) {
            return res.status(404).json({ message: 'delete unsuccefully' });
        }
        res.json(result);

    } catch (error) {

        console.error('Error deleting vehicle:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

//reports
const getAllReportsData = async (req, res) => {
    try {

        const result = await reportModel.find();
        if (!result) {
            return res.status(404).json({ message: "reports not found" })
        }
        res.send(result);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getReportsDataByVehicleId = async (req, res) => {
    try {
        const vehicleId = req.params.vehicleId;
        const result = await reportModel.find({ vehicleId: vehicleId });
        if (!result) {
            return res.status(404).json({ message: 'No reports' });
        }
        res.json(result);
    } catch (error) {

        console.error('Error fetching Reports:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const getReportsDataByBuyerId = async (req, res) => {
    try {
        const buyerId = req.params.buyerId;
        const result = await reportModel.find({ buyerId: buyerId });
        if (!result) {
            return res.status(404).json({ message: 'No reports' });
        }
        res.json(result);
    } catch (error) {

        console.error('Error fetching Reports:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
const getReportsDataBySellerId = async (req, res) => {
    try {
        const sellerId = req.params.sellerId;
        const result = await reportModel.find({ sellerId: sellerId });
        if (!result) {
            return res.status(404).json({ message: 'No reports' });
        }
        res.json(result);
    } catch (error) {

        console.error('Error fetching Reports:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const updateReportsDataByVehicleId = async (req, res) => {
    try {
        const vehicleId = req.params.vehicleId;
        const updates = req.body;

        const result = await reportModel.updateMany({ vehicleId: vehicleId }, updates, { new: true });
        if (!result) {
            return res.status(404).json({ message: 'No reports found for this Vehicle' });
        }
        res.json({ message: 'Reports updated successfully', result });
    } catch (error) {
        console.error('Error Updating Reports:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


const getTopSellersData = async (req, res) => {
    try {
        const topSellers = await sellerModel.aggregate([
            { $unwind: "$orderHistory" }, // Unwind the sellsHistory array
            {
                $group: {
                    _id: "$sellerId",
                    totalSells: { $sum: 1 } // Calculate the total number of sales for each seller
                }
            },
            { $sort: { totalSells: -1 } }, // Sort by totalSells in descending order
            { $limit: 5 } // Limit the result to the top 5 sellers
        ]);

        const topSellerIds = topSellers.map((seller) => seller._id);

        const sellersInfo = await userModel.find({ "_id": { $in: topSellerIds } }, { _id: 1, username: 1, email: 1,phone: 1});

        // Combine topSellers and sellersInfo to include basic info in the response
        const result = topSellers.map((seller) => {
            const info = sellersInfo.find((info) => info._id.toString() === seller._id.toString());
            return {
                sellerId: seller._id,
                totalSells: seller.totalSells,
                username: info ? info.username : "",
                email: info ? info.email : "",
                phone: info ? info.phone: ""
            };
        });

        res.json(result);
    } catch (error) {
        console.error("Error retrieving top sellers:", error);
        throw error;
    }

}

module.exports = {
    getAllUserData,
    getUserById, updateUserById, deleteUserById, getAllOrdersData,
    getOrderById, getOrderByBuyerId, getOrderBySellerId, getAllReportsData,
    getVehicleDataBySellerId, getAllVehicleData, getVehicleDataById, getReportsDataByVehicleId,
    deleteVehicleById, updateReportsDataByVehicleId, getReportsDataByBuyerId, getReportsDataBySellerId,
    getOrderDataByVehicleId, getTopSellersData, updateVehicleBySellerId
}