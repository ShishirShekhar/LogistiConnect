import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Protected from "./pages/Protected";
import Manufacturer from "./pages/Manufacturer";
import Transporter from "./pages/Transporter";
import Messages from "./pages/Messages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/manufacturer" element={<Protected component={<Manufacturer />} />} />
        <Route path="/transporter" element={<Protected component={<Transporter />} />} />
        <Route path="/messages" element={<Protected component={<Messages />} />} />
      </Routes>
    </Router>
  );
};

export default App;
