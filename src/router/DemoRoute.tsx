import Footer from "../components/Footer";
import Header from "../components/Header";
import BookMeeting from "../sections/BookMeeting";
import VideoFrame from "../sections/VideoFrame";

const DemoRoute = () => {
	return (
		<div>
			<Header />
			<VideoFrame />
			<BookMeeting />
			<Footer />
		</div>
	);
};

export default DemoRoute;
