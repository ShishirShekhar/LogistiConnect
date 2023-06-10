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
        const user = response.data.user;
        // set user data in localStorage
        localStorage.setItem("login", JSON.stringify(user));

        // Navigate
        if (user.userType === "manufacturer") {
          navigate("/manufacturer");
        } else if (user.userType === "transporter") {
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
    <div className="form_container">
      <h2 className="form_title">Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {errorMessage && <p className="text-white mb-2">{errorMessage}!!</p>}

        <button type="submit" className="submit">
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
