// Import required models
const Order = require("../model/order");

exports.createOrder = async (req, res) => {
  try {
    const {
      orderId,
      to,
      from,
      quantity,
      address,
      transporter,
      price,
      message
    } = new Order(req.body);

    // Check if the order already exists
    const existingOrder = await Order.findOne({ orderId });
    if (existingOrder) {
      return res.status(400).json({ message: "Order already exists" });
    }

    // Create a new order
    const newOrder = new Order({
      orderId,
      to,
      from,
      quantity,
      address,
      transporter,
      price,
      message
    });
    await newOrder.save();

    res.status(201).json({ message: "order sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

exports.updateOrder = async (req, res) => {};
