import "./App.css";
import DemoRoute from "./router/DemoRoute";
import LandingRoute from "./router/LandingRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AboutRoute from "./router/AboutRoute";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="*" element={<LandingRoute />}></Route>
					<Route path="demo" element={<DemoRoute />}></Route>
					<Route path="our-story" element={<AboutRoute />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
