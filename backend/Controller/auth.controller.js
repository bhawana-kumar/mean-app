const config = require("../ConnectionConfig/auth.config");
const db = require("../model");
const User = require("../model/userModel");
const Buyer = require('../model/buyerModel')
const Seller = require("../model/sellerModel");
const Admin = require("../model/adminModel")

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      phone: req.body.phone,
      role: req.body.role
    });

    await user.save();

    if (user.role.toLowerCase() === 'buyer') {
      const buyer = new Buyer({ buyerId: user._id, status: "active" });

      await buyer.save();
    } else if (user.role.toLowerCase() === 'seller') {
      const seller = new Seller({ sellerId: user._id, status: 'active' });
      console.log(seller)
      await seller.save();
    }

    res.send({ message: "User was registered successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.signin = (req, res) => {
  // Find admin
  Admin.findOne({ username: req.body.username })
    .then(admin => {
      if (admin) {
       
        const passwordIsValid = bcrypt.compareSync(req.body.password, admin.password);

        // const passwordIsValid = true;
        if (!passwordIsValid) {
          return res.status(401).send({ message: "Invalid password." });
        }
        const token = jwt.sign({ id: admin.id }, config.secret, {
          algorithm: 'HS256',
          expiresIn: '2h'
        });
        req.session.token = token;
        res.status(200).send({
          id: admin._id,
          username: admin.username,
          email: admin.email,
          role: admin.role,
          token: token
        });
      } else {
        // Find regular user
        User.findOne({ username: req.body.username })
          .then(user => {
            if (!user) {
              return res.status(404).send({ message: "User not found." });
            }
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (!passwordIsValid) {
              return res.status(401).send({ message: "Invalid password." });
            }
            const token = jwt.sign({ id: user.id }, config.secret, {
              algorithm: 'HS256',
              expiresIn: '2h'
            });
            req.session.token = token;
            res.status(200).send({
              id: user._id,
              username: user.username,
              email: user.email,
              phone: user.phone,
              role: user.role,
              token: token,
              status: user.status
            });
          })
          .catch(err => {
            return res.status(500).send({ message: err.message || "Internal server error." });
          });
      }
    })
    .catch(err => {
      return res.status(500).send({ message: err.message || "Internal server error." });
    });
};




exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    this.next(err);
  }
};

// Inside auth.controller.js

exports.updateAddress = (req, res) => {
  const userId = req.userId; // Get user ID from the request

  // Ensure that the address field is present in the request body
  if (!req.body.address) {
    return res.status(400).send({ message: "Address field is required." });
  }

  // Update the user's address
  User.findByIdAndUpdate(
    userId,
    { address: req.body.address }, // Set the address field directly
    { new: true },
    (err, user) => {
      if (err) {
        console.error("Error updating address:", err);
        return res.status(500).send({ message: "Error updating address." });
      }
      if (!user) {
        return res.status(404).send({ message: "User not found." });
      }
      res.status(200).send({ message: "Address updated successfully!", user: user });
    }
  );
};

exports.updatePassword = (req, res) => {
  const userId = req.userId;
  const { currentPassword, newPassword, confirmNewPassword } = req.body;

  // Implement validation to ensure new password matches the confirmation
  if (newPassword !== confirmNewPassword) {
    return res.status(400).send({ message: "New password and confirm password do not match." });
  }

  User.findById(userId, (err, user) => {
    if (err) {
      return res.status(500).send({ message: err });
    }

    // Check if current password matches
    if (!bcrypt.compareSync(currentPassword, user.password)) {
      return res.status(401).send({ message: "Invalid current password." });
    }

    // Update password
    user.password = bcrypt.hashSync(newPassword, 8);

    // Save updated user
    user.save((err) => {
      if (err) {
        return res.status(500).send({ message: err });
      }
      res.send({ message: "Password updated successfully!" });
    });
  });
};

