import { useState } from "react";

const Transporter = () => {
  const [orderId, setOrderId] = useState("1");
  const [price, setPrice] = useState("1");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center h-screen bg text-white text-center">
      <div className="w-full sm:max-w-md">
        <div className="form_container">
          <h2 className="form_title">Transporter</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="orderId">Order Id:</label>
            <select
              id="orderId"
              name="orderId"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
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
