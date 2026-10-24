const mongoose = require("mongoose");
const { Schema } = mongoose;

const BuyerSchema = new mongoose.Schema({
  buyerId: {
    type: String,
    required: true
  },
  myOrders: {
    type: Array,
    default: []
  },
  shortlisted: {
    type: Array,
    default: []
  },
  status: {
    type: String,
    default: "active"
  },
  paymentInfo: {
    type: Schema.Types.Mixed,
    default: {
      cardHolderName: {type:String},
      cardNumber: {type:Number},
      billingAddress: {type:String}
    }
  }
});


const Buyer = mongoose.model("Buyer", BuyerSchema);

module.exports = Buyer;
