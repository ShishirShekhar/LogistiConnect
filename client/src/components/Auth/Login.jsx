import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ onFormSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      email,
      password,
    };

    axios
      .post("http://localhost:3001/login", requestBody)
      .then((response) => {
        // Handle the response
        const { userType } = response.data.user;
        console.log(userType);

        if (userType === "manufacturer") {
          navigate("/manufacturer");
        } else if (userType === "transporter") {
          navigate("/transporter");
        } else {
          // Handle unrecognized user type
          setErrorMessage("Invalid user type");
        }
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
        if (error.response && error.response.status === 401) {
          setErrorMessage("Invalid email or password");
        } else {
          setErrorMessage("An error occurred");
        }
      });
  };

  return (
    <div className="sm:shadow-md sm:border-2 border-white rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="email" className="text-left pb-1">
          Email:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 mb-4 border rounded text-[#7349db]"
          required
        />

        <label htmlFor="password" className="text-left pb-1">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 mb-4 border rounded text-[#7349db]"
          required
        />

        {errorMessage && <p className="text-white mb-2">{errorMessage}!!</p>}

        <button
          type="submit"
          className="bg-white text-[#7349db] hover:bg-gray-200 py-2 px-4 rounded"
        >
          Login
        </button>
      </form>

      <p className="mt-4">
        Don't have an account?{" "}
        <button
          className="text-white hover:underline"
          onClick={() => onFormSwitch("register")}
        >
          Register here.
        </button>
      </p>
    </div>
  );
};

export default Login;
