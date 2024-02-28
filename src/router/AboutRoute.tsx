import Footer from "../components/Footer";
import Header from "../components/Header";
import OurStoryHero from "../components/OurStoryHero";
import ProgressBar from "../components/ProgressBar";
import ROICalculator from "../components/ROICalculator";
import Benefits from "../sections/Benefits";
import BookMeeting from "../sections/BookMeeting";
import StartGettingAppointmentsInTwoWeeks from "../sections/StartGettingAppointmentsInTwoWeeks";

const AboutRoute = () => {
	return (
		<div>
			<Header />
			<OurStoryHero />
			<Benefits />
			<StartGettingAppointmentsInTwoWeeks />
			<ROICalculator />
			<BookMeeting />
			<Footer />
		</div>
	);
};

export default AboutRoute;
