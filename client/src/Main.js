import Home from "./pages/Home/Home";
import Incidents from "./pages/Incidents/Incidents";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incident" element={<Incidents />} />
      </Routes>
    </div>
  );
}

export default App;
