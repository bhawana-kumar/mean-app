const report = require("../model/reportModel");
const postReport=async (req, res) => {
    try {
        const { buyerName, comment,vehicleId } = req.body;

        const reports = new report({
            buyerName, comment,vehicleId
        });
        await reports.save();
        res.status(201).json({
            message: 'report created successfully',
            reports
        });
    } catch (error) {
        // If there's an error, respond with an error message
        res.status(500).json({
            message: 'Failed to create vehicle',
            error: error.message
        });
    }
}
module.exports={ 
    postReport
}
