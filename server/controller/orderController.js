// Import required models
const Order = require("../models/order");
const User = require("../models/user");

// Handle Manufacturer form submission
const createOrder = async (req, res) => {
  try {
    const { to, from, quantity, transporterId } = req.body;

    // Get the user (Manufacturer) based on the authenticated user's ID and type
    const user = await User.findOne({
      _id: req.user.id,
      userType: "manufacturer",
    });

    if (!user) {
      return res.status(404).json({ message: "Manufacturer not found" });
    }

    // Generate a unique Order ID
    const orderId = generateOrderId();

    // Create a new order
    const order = new Order({
      orderId,
      to,
      from,
      quantity,
      address: user.address,
      transporter: transporterId,
      manufacturer: user.id,
    });

    // Save the order
    await order.save();

    // Send the order details to the selected transporter
    const transporter = await User.findOne({
      _id: transporterId,
      userType: "transporter",
    });
    if (!transporter) {
      return res.status(404).json({ message: "Transporter not found" });
    }
    transporter.messages.push(order);
    await transporter.save();

    // Send response
    res.status(200).json({ message: "Order created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

// Handle Transporter form submission
const updateOrder = async (req, res) => {
  try {
    const { orderId, price, message } = req.body;

    // Find the order by orderId
    const order = await Order.findOne({ orderId });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Update the order with the price and message
    order.price = price;
    order.message = message;
    await order.save();

    // Send response
    res.status(200).json({ message: "Order updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

// Helper function to generate a random alphanumeric Order ID
function generateOrderId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = 5;
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

module.exports = { createOrder, updateOrder };
