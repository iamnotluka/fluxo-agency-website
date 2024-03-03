import "./App.css";
import HyperScaleRoute from "./router/HyperScaleRoute";
import LandingRoute from "./router/LandingRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AboutRoute from "./router/AboutRoute";
import BlogsRoute from "./router/BlogsRoute";
import TermsAndConditionsRoute from "./router/TermsAndConditionsRoute";
import PrivacyPolicyRoute from "./router/PrivacyPolicyRoute";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="*" element={<LandingRoute />}></Route>
					<Route path="hyper-scale-automation" element={<HyperScaleRoute />}></Route>
					<Route path="our-story" element={<AboutRoute />}></Route>
					<Route path="blogs" element={<BlogsRoute />}></Route>
					<Route path="terms-and-conditions" element={<TermsAndConditionsRoute />}></Route>
					<Route path="privacy-policy" element={<PrivacyPolicyRoute />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
