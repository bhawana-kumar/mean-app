const mongoose=require('mongoose')
const reportSchema = new mongoose.Schema({
    buyerId: { type: String, required: true },
    buyerName: { type: String, required: true },
    sellerId: { type: String, required: true },
    sellerName: { type: String, required: true },
    vehicleId: { type: String, required: true },
    vehicleRegistrationNumber: { type: String, required: true },
    comment: { type: String },
    resolved: { type: Boolean, default: false }
  });

module.exports=mongoose.model("report",reportSchema)
