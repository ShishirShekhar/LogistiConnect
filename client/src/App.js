import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Manufacturer from "./pages/Manufacturer";
import Transporter from "./pages/Transporter";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/manufacturer" element={<Manufacturer />} />
        <Route path="/transporter" element={<Transporter />} />
      </Routes>
    </Router>
  );
};

export default App;
