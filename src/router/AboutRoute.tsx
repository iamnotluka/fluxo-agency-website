import Footer from "../components/Footer";
import Header from "../components/Header";
import OurStoryHero from "../components/OurStoryHero";
import ROICalculator from "../components/ROICalculator";
import BookMeeting from "../sections/BookMeeting";
import StartGettingAppointmentsInTwoWeeks from "../sections/StartGettingAppointmentsInTwoWeeks";
import WhatWeDo from "../sections/WhatWeDo";

const AboutRoute = () => {
	return (
		<div>
			<Header />
			<OurStoryHero />
			<WhatWeDo />
			<StartGettingAppointmentsInTwoWeeks />
			<ROICalculator />
			<BookMeeting />
			<Footer />
		</div>
	);
};

export default AboutRoute;
