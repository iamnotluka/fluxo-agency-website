import TestimonialBlock from "../components/TestimonialBlock";

export interface TestimonialContent {
	companyName: string;
	quote: string;
	personName: string;
	position: string;
	personImage: string;
	companyImage: string;
}

const Testimonials: React.FC = () => {
	const testimonialContents: TestimonialContent[] = [
		{
			companyName: "ClutchDigital",
			companyImage: "clutch-digital.png",
			personImage: "shak-clutch-digital.png",
			quote:
				"Thanks to guys at fluxo we've saved time and gained peace of mind, knowing our marketing efforts are now both effective and efficient.",
			personName: "Shakir Hammadi",
			position: "Co-Founder",
		},
		{
			companyName: "FITAZ",
			quote: "Super amazing, easy to deal with and plasure to work with.",
			personName: "Aaron Mcallister",
			position: "Co-Founder",
			companyImage: "fitaz-fk-logo.png",
			personImage: "aaron-fitaz.png",
		},
		{
			companyName: "GymGrow",
			quote: "Their guidance was a game-changer for our outreach campaigns, both for our clients and us.",
			personName: "Josh Terry",
			position: "Founder & Director",
			companyImage: "grow-your-gym.png",
			personImage: "aaron-fitaz.png",
		},
	];

	return (
		<div className="bg-white text-black sm:py-20 md:py-24 pt-16 px-4">
			<div className="w-full max-w-3xl text-left sm:text-center pb-11 mx-auto">
				<h1 className="sm:text-4xl md:text-5xl text-2xl font-bold leading-tight">
					<span>
						Don't take our word for it... see what people say about us. 📣
						<br />
						<br />
					</span>
				</h1>
				<p className="text-gray-800 mt-6">
					<span>This is what people from amazing companies we are working with are saying about us.</span>
				</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 max-w-5xl mx-auto">
				{testimonialContents.map((content, index) => (
					<TestimonialBlock key={index} content={content} />
				))}
			</div>
		</div>
	);
};

export default Testimonials;
