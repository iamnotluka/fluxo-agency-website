import Footer from "../components/Footer";
import Header from "../components/Header";
import BookMeeting from "../sections/BookMeeting";
// import VideoFrame from "../sections/VideoFrame";

const HyperScaleRoute = () => {
	return (
		<div>
			<Header />
			<div className="bg-black text-white sm:py-20 md:py-24 py-10 pb-4 px-4">
				<div className="w-full max-w-3xl text-left sm:text-center pb-11 mx-auto">
					<h1 className="sm:text-5xl md:text-6xl text-4xl font-bold sm:leading-tight">
						<span>HyperScale Outbound Automation</span>
					</h1>
					<p className="text-white-200 mt-6">
						<span>
							It's like injecting your business with steroids. Growing a business is hard but we make it a lot easier,
							predictable, less stressful.
						</span>
					</p>
					<a href="https://tidycal.com/fluxo-agency" target="_blank" rel="noreferrer">
						<button className="mt-8 sm:bg-transparent bg-white sm:border-2 sm:border-white sm:text-white text-black font-semibold py-4 px-6 hover:bg-white hover:text-black transition duration-150 ease-in-out w-full sm:w-auto">
							Free Strategy Call
						</button>
					</a>
				</div>
			</div>
			<div className="bg-white text-black sm:py-20 md:py-24 py-10 pb-4 px-4">
				<div className="w-full max-w-3xl text-left sm:text-center pb-11 mx-auto">
					<p className="text-gray-800 mt-6 text-lg">
						<span>
							Navigating the business world is no small feat, right? And when it comes to growth, well, that's a whole
							new level of challenge.
							<br />
							<br />
							Ever catch yourself pondering, "Where's my next client coming from?" Or maybe you're mulling over your
							next big move:
							<br />
							<br />
							Sprucing up your website... or maybe jazzing up your logo?
							<br />
							<br />
							Diving into the SEO deep end?
							<br />
							<br />
							Or, jumping on the paid ads bandwagon – because, well, isn't that what everyone's doing?
							<br />
							<br />
							Or, here's a thought, shelling out a hefty chunk of your earnings to follow some guru's "revolutionary"
							method in their latest Skool community, hoping to make their repackaged content material fit your round
							hole business. Sound familiar? We totally get it.
							<br />
							<br />
							Been there, done that.
							<br />
							<br />
							Now, picture this: Your lead generation and client acquisition, completely on autopilot. You wake up to a
							calendar brimming with appointments.
							<br />
							<br />
							And the cherry on top? It's all based on a pay-per-result model.
							<br />
							<br />
							How does that sound? If you're here, chances are, you're on the lookout for something more. Something
							better.
							<br />
							<br />
							Whether you're aiming to solidify your business, boost your income, or simply crave more freedom, we're
							here to tell you: there's a better way.
							<br />
							<br />
							Welcome to the future we're crafting for service-based businesses like yours.
						</span>
					</p>
				</div>
			</div>
			{/* <VideoFrame /> */}
			<BookMeeting />
			<Footer />
		</div>
	);
};

export default HyperScaleRoute;
