import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "../components/Nav";
import getCurrentLocation from "../utils/currentLocation";

const Manufacturer = () => {
  const [orderId, setOrderId] = useState("");
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [address, setAddress] = useState("");
  const [transporter, setTransporter] = useState("");
  const [transporters, setTransporters] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const login = JSON.parse(localStorage.getItem("login"));
  const accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  const generateOrderId = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 8;
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    setOrderId(result);
  };

  const setLocation = async () => {
    const { latitude, longitude } = await getCurrentLocation();
    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${accessToken}`
    );

    setAddress(response.data.features[0].place_name);
  };

  const getTransporters = async () => {
    try {
      const response = await axios.get("https://logisti-connect-server.vercel.app/transporters");
      setTransporters(response.data);
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use the selected transporter or the first transporter if none is selected
    const selectedTransporter = transporter || transporters[0]._id;

    const order = {
      orderId,
      to,
      from,
      quantity,
      address,
      manufacturer: login._id,
      transporter: selectedTransporter,
      price: 0,
      message: "",
    };

    axios
      .post("https://logisti-connect-server.vercel.app/order", order)
      .then((response) => {
        setErrorMessage("");
        console.log(response.data);
        toast.success("Order submitted successfully");

        // Reset the form values
        setOrderId("");
        setTo("");
        setFrom("");
        setQuantity("1");
        setAddress("");
        setTransporter("");
        setErrorMessage("");
      })
      .catch((error) => {
        console.error(error);
        if (error.response) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("An error occurred");
        }
        toast.error(errorMessage);
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center h-screen bg text-white text-center">
      <Nav />

      <div className="h-full flex flex-col justify-center w-full sm:max-w-md">
        <ToastContainer />
        <div className="form_container">
          <h2 className="form_title">Manufacturer</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="orderId">Order Id:</label>
            <input
              type="text"
              id="orderId"
              name="orderId"
              placeholder="Order Id"
              value={orderId}
              onClick={async () => {
                generateOrderId();
                getTransporters();
              }}
              readOnly
              required
            />

            <label htmlFor="to">To:</label>
            <input
              type="text"
              id="to"
              name="to"
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
            />

            <label htmlFor="from">From:</label>
            <input
              type="text"
              id="from"
              name="from"
              placeholder="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              required
            />

            <label htmlFor="quantity">Quantity:</label>
            <select
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>

            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              value={address}
              onClick={setLocation}
              readOnly
              required
            />

            <label htmlFor="transporter">Transporter:</label>
            <select
              id="transporter"
              name="transporter"
              value={transporter}
              onChange={(e) => setTransporter(e.target.value)}
            >
              {transporters.map((trans) => (
                <option key={trans._id} value={trans._id}>
                  {trans._id}
                </option>
              ))}
            </select>

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

export default Manufacturer;
