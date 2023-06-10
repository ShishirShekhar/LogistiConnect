import { useState } from "react";
import axios from "axios";

import Nav from "../components/Nav";

const Transporter = () => {
  const [orderId, setOrderId] = useState("");
  const [orders, setOrders] = useState([]);
  const [price, setPrice] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const login = JSON.parse(localStorage.getItem("login"));

  const getOrders = async () => {
    try {
      const response = await axios.get("http://localhost:3001/orders");
      // filter data by selecting only order for the transporter
      const filtered = response.data.filter((user) => user.transporter === login._id)
      // set orders
      setOrders(filtered);

    } catch (error) {
      console.log(error);
      setErrorMessage(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center h-screen bg text-white text-center">
      <Nav />

      <div className="h-full flex flex-col justify-center w-full sm:max-w-md">
        <div className="form_container">
          <h2 className="form_title">Transporter</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="orderId">Order Id:</label>
            <select
              id="orderId"
              name="orderId"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              onClick={getOrders}
            >
              {orders.map((order) => (
                <option key={order._id} value={order.email}>
                  {order.orderId}
                </option>
              ))}
            </select>

            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />

            {errorMessage && (
              <p className="text-white mb-2">{errorMessage}!!</p>
            )}

            <button type="submit" className="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Transporter;
