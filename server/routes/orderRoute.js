// Import required modules
const express = require("express");
const router = express.Router();
// Import required controller
const OrderController = require("../controller/orderController");

// Post order route
router.post("/order", OrderController.createOrder);
// router.put("/order", OrderController.updateOrder);

module.exports = router;
