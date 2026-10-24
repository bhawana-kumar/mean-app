
const mongoose = require("mongoose")
const { Schema } = mongoose;

const sellerSchema = new Schema({
  sellerId: {
    // type: mongoose.Schema.Types.ObjectId,
    type:String,
    required: true
  },
  myVehicles: {
   type:Array,
   default: []
  },
  sellsHistory: {
    type:Array,
    default: []
  },
  status: {
    type: String,
    default: 'active'
  },
  paymentInfo: {
    type: Schema.Types.Mixed,
    default: {
      cardHolderName: {type:String},
      cardNumber: {type:Number},
      billingAddress: {type:String}
    }
  }
}
)



module.exports = mongoose.model("seller", sellerSchema)

