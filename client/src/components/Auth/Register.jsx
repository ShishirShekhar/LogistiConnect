import { useState } from "react";
import axios from "axios";

const Register = ({ onFormSwitch }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("manufacturer");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

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
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
        setErrorMessage("An error occurred");
      });
  };

  return (
    <div className="sm:shadow-md sm:border-2 border-white rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-6">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="username" className="text-left pb-1">
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-4 py-2 mb-4 border rounded text-[#7349db]"
          required
        />

        <label htmlFor="email" className="text-left pb-1">
          Email:
        </label>
        <input
          type="email"
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

        <label htmlFor="confirmPassword" className="text-left pb-1">
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="px-4 py-2 mb-4 border rounded text-[#7349db]"
          required
        />

        <label htmlFor="userType" className="text-left pb-1">
          User Type:
        </label>
        <select
          id="userType"
          name="userType"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          className="px-4 py-2 mb-4 border rounded text-[#7349db]"
        >
          <option value="manufacturer">Manufacturer</option>
          <option value="transporter">Transporter</option>
        </select>

        {errorMessage && <p className="text-white mb-2">{errorMessage}!!</p>}

        <button
          type="submit"
          className="bg-white text-[#7349db] hover:bg-gray-200 py-2 px-4 rounded"
        >
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
