const db = require("../model");

const User = require('../model/userModel');

checkDuplicateUsernameOrEmail = async (req, res, next) => {
  // Username
  try {
    // Username
    
    let user = await User.findOne({ username: req.body.username }).exec();
    if (user) {
      return res.status(400).send({ message: "Username is already in use!" });
    }
   
    // Email
    user = await User.findOne({ email: req.body.email }).exec();
    if (user) {
      return res.status(400).send({ message: "Email is already in use!" });
    }
    //phone
    user = await User.findOne({ phone: req.body.phone }).exec();
    if (user) {
      return res.status(400).send({ message: "phone is already in use!" });
    }
    
    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};


// checkRolesExisted = (req, res, next) => {
//   if (req.body.roles) {
//     for (let i = 0; i < req.body.roles.length; i++) {
//       if (!ROLES.includes(req.body.roles[i])) {
//         res.status(400).send({
//           message: `Role ${req.body.roles[i]} does not exist!`
//         });
//         return;
//       }
//     }
//   }

//   next();
// };

const verifySignUp = {
  checkDuplicateUsernameOrEmail
};

module.exports = verifySignUp;
