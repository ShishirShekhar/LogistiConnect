import { useState } from "react";
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';

const Auth = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="flex items-center justify-center h-screen bg text-white text-center">
      <div className="w-full sm:max-w-md">
        {currentForm === "login" ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default Auth;
