// Import required modules
const mongoose = require("mongoose");

// Define Order Schema
const orderSchema = new mongoose.Schema({
  orderId: { type: String, require: true },
  to: { type: String, required: true },
  from: { type: String, required: true },
  quantity: { type: String, enum: [1, 2, 3], required: true },
  address: { type: String, required: true },
  transporter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  price: { type: String, require: true },
  message: { type: String, require: true }
});

// Define Model
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
