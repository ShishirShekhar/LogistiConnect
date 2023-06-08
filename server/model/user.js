// Import required modules
const mongoose = require("mongoose");

// Define User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  userType: {
    type: String,
    enum: ["Manufacturer", "Transporter"],
    required: true,
  },
});

// Define Model
const User = mongoose.model("User", userSchema);

module.exports = User;
