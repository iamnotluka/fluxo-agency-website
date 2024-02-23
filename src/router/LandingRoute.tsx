import Header from "../components/Header";
import Hero from "../sections/Hero";
import Benefits from "../sections/Benefits";
import WhatWeDo from "../sections/WhatWeDo";
import StartGettingAppointmentsInTwoWeeks from "../sections/StartGettingAppointmentsInTwoWeeks";
import Footer from "../components/Footer";
import BookMeeting from "../sections/BookMeeting";
import Testimonials from "../sections/Testimonials";
import PriceCalculator from "../components/PriceCalculator";

const LandingRoute = () => {
	return (
		<div>
			<Header />
			<Hero />
			<Benefits />
			<WhatWeDo />
			<Testimonials />
			<StartGettingAppointmentsInTwoWeeks />
			<PriceCalculator />
			<BookMeeting />
			<Footer />
		</div>
	);
};

export default LandingRoute;
