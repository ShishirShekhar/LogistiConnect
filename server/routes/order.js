// Import required modules
const express = require("express");
const router = express.Router();
// Import required controller
const OrderController = require("../controller/orderController");

// Manufacturer route
router.post("/manufacturer", OrderController.createOrder);

// Transporter route
router.post("/transporter", OrderController.updateOrder);

module.exports = router;
