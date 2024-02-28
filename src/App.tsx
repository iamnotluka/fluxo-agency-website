import "./App.css";
import DemoRoute from "./router/DemoRoute";
import LandingRoute from "./router/LandingRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AboutRoute from "./router/AboutRoute";
import BlogsRoute from "./router/BlogsRoute";
import ProgressBar from "./components/ProgressBar";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="*" element={<LandingRoute />}></Route>
					<Route path="demo" element={<DemoRoute />}></Route>
					<Route path="our-story" element={<AboutRoute />}></Route>
					<Route path="blogs" element={<BlogsRoute />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
