import { useEffect, useState } from "react";
import axios from "axios";

const Messages = () => {
  const [orders, setOrders] = useState([]);
  const login = JSON.parse(localStorage.getItem("login"));

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios.get("https://logisti-connect-server.vercel.app/orders");
        // filter data by selecting only order for the transporter
        const filtered = response.data.filter(
          (user) => user.manufacturer === login._id
        );
        // set orders
        setOrders(filtered);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, [login]);

  return (
    <div className="flex items-center justify-center h-screen bg text-white text-center">
      <div className="w-full sm:max-w-md">
        <h1 className="form_title">Messages</h1>
        <div className="text-left flex flex-col gap-2">
          {orders.map((order) => (
            <div className="form_container" key={order.orderId}>
              <p>OrderId: {order.orderId}</p>
              <p>Transporter: {order.transporter}</p>
              {order.price !== "0" && <p>Price: {order.price}</p>}
              {order.message !== "" && <p>Message: {order.message}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
