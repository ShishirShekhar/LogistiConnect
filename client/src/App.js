import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Manufacturer from "./pages/Manufacturer";
import Transporter from "./pages/Transporter";
import Protected from "./pages/Protected";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/manufacturer" element={<Protected component={<Manufacturer />} />} />
        <Route path="/transporter" element={<Protected component={<Transporter />} />} />
      </Routes>
    </Router>
  );
};

export default App;
