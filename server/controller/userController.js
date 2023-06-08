// Import required models
const User = require("../model/user");

// Register user
exports.register = (req, res) => {
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
};

// User login
exports.login = (req, res) => {
  const { email, password } = req.body;

  // Find the user by email and password
  User.findOne({ email, password })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // User found, return success response
      res.status(200).json({ message: "Login successful" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "An error occurred" });
    });
};
