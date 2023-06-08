// Import required modules
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
// Import required models
const User = require("./model/user");

// Initialize app
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Mongodb connection
mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: "data",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Routes
app.get("/", (req, res) => {
    return res.status(400).json({ message: "Server is running successfully!" })
})

app.post("/register", (req, res) => {
  const { username, email, password, userType } = req.body;

  // Check if the user already exists
  User.findOne({ email })
    .then((existingUser) => {
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }

      // Create a new user
      const newUser = new User({ username, email, password, userType });
      return newUser.save();
    })
    .then(() => {
      res.status(201).json({ message: "User created successfully" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "An error occurred" });
    });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Find the user by email and password
  User.findOne({ email, password })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ message: "Invalid email or password" });
      }

      // User found, return success response
      res.status(200).json({ message: "Login successful" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "An error occurred" });
    });
});

app.listen(port, () => {
  // Use the port variable
  console.log(`Server is running on port ${port}`);
});
