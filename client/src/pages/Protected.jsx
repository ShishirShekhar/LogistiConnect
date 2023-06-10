import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Protected = ({ component }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const login = localStorage.getItem("login");

    if (!login) {
      navigate("/");
    } else {
      const user = JSON.parse(login);

      if (location.pathname.includes("/manufacturer") && user.userType !== "manufacturer") {
        navigate("/transporter");
      } else if (location.pathname.includes("/transporter") && user.userType !== "transporter") {
        navigate("/manufacturer");
      }
    }
  }, [location.pathname, navigate]);

  return component;
};

export default Protected;
