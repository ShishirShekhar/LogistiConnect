import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = ({ onFormSwitch }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("manufacturer");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // Set the Content-Type header
    axios.defaults.headers.post["Content-Type"] = "application/json";

    const requestBody = {
      username,
      email,
      password,
      userType,
    };

    axios
      .post("http://localhost:3001/register", requestBody)
      .then((response) => {
        // Handle the response
        console.log(response.data);

        if (userType === "manufacturer") {
          navigate("/manufacturer");
        } else {
          navigate("/transporter");
        }
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
        if (error.response) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("An error occurred");
        }
      });
  };

  return (
    <div className="form_container">
      <h2 className="form_title">Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
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

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <label htmlFor="userType">User Type:</label>
        <select
          id="userType"
          name="userType"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="manufacturer">Manufacturer</option>
          <option value="transporter">Transporter</option>
        </select>

        {errorMessage && <p className="text-white mb-2">{errorMessage}!!</p>}

        <button type="submit" className="submit">
          Sign Up
        </button>
      </form>

      <p className="mt-4">
        Already have an account?{" "}
        <button
          className="text-white hover:underline"
          onClick={() => onFormSwitch("login")}
        >
          Login here.
        </button>
      </p>
    </div>
  );
};

export default Register;
