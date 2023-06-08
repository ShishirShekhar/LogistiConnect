import { useState } from "react";

const Login = ({ onFormSwitch }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sm:shadow-md sm:border-2 border-white rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
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
