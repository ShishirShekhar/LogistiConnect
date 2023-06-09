// Import required models
const User = require("../model/user");

// Register user
exports.register = async (req, res) => {
  try {
    const { username, email, password, userType } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Create a new user
    const newUser = new User({ username, email, password, userType });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

// User login
exports.login = (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Check if the password is correct
      if (user.password !== password) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // User found and password is correct, return success response
      res.status(200).json({ user });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "An error occurred" });
    });
};
