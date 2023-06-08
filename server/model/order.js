// Import required modules
const mongoose = require("mongoose");

// Define order Schema
const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
  },
  to: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  transporter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  manufacturer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  price: {
    type: Number,
    default: null,
  },
  message: {
    type: String,
    default: "",
  },
});

// Define Model
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
