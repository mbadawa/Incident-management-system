import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Routes, Route, Link } from "react-router-dom";
function App() {
	return (
		<div className="relative">
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/add" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
