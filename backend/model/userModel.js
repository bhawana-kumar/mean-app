const mongoose = require("mongoose");
const Schema= mongoose.Schema;

const UserSchema= new Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number
    },  
    role: {
        type: String,
        required:true
    },
    password: {
        type : String,
        required: true,
    },
    address: {
        type: String
    },
    status: {
        type: String,
        default: "active"
      }
    // createdAt:{
    //     type: Date
    // },
    // updatedAt:{
    //     type:Date
    // }
},{
    timestamps: true
  }
)

module.exports = mongoose.model('users', UserSchema)

//MONGODB WILL BY DEFAULT TAKE COLLECTION NAME IN PLURAL AND SMALLCASE 