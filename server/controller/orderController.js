// Import required models
const Order = require("../model/order");

// Get all the orders
exports.orders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

// Create new orders
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
      message,
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
      message,
    });
    await newOrder.save();

    res.status(201).json({ message: "order sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const { orderId, price } = req.body;

    // find order by order id
    const order = await Order.findOne({ orderId });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Update the order fields with the new data
    order.price = price;
    order.message = `Order accepted at price ${price} by ${order.transporter}`;

    // Save the updated order
    await order.save();

    res.status(200).json({ message: "Order updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating order" });
  }
};
