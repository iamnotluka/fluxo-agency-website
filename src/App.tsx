import "./App.css";
import DemoRoute from "./router/DemoRoute";
import LandingRoute from "./router/LandingRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="*" element={<LandingRoute />}></Route>
					<Route path="demo" element={<DemoRoute />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
