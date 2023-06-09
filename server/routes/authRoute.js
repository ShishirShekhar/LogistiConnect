// Import required modules
const express = require("express");
const router = express.Router();
// Import required controller
const UserController = require("../controller/userController");

// Register route
router.post("/register", UserController.register);

// Login route
router.post("/login", UserController.login);

// Get users route
router.get("/users", UserController.users);

// Get manufacturers route
router.get("/manufacturers", UserController.manufacturers);

// Get transporters route
router.get("/transporters", UserController.transporters);

module.exports = router;
