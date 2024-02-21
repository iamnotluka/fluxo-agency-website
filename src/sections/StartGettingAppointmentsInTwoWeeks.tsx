import InfoBlock from "../components/InfoBlock";

const StartGettingAppointmentsInTwoWeeks = () => {
	return (
		<div className="bg-white text-black sm:py-20 md:py-24 py-16 px-4">
			<div className="w-full max-w-3xl text-left sm:text-center pb-11 mx-auto">
				<h1 className="sm:text-4xl md:text-5xl text-2xl font-bold leading-tight">
					<span>
						Start getting appointments in 2-3 weeks!
						<br />
						<br />
					</span>
				</h1>
				<p className="text-gray-800 sm:mt-20">
					<span>
						Improved results over time is our guarantee. We continuously optimize our strategies to always find the most
						”up to date” pain points for your ideal customer.
					</span>
					<br></br>
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 max-w-5xl mx-auto">
					<InfoBlock dark={true} heading="📅 26+ Appointments Per Month" text="Monthly appointments set on average." />
					<InfoBlock dark={true} heading="⏳ 120+ Hours Saved" text="Monthly time saved for our clients." />
					<InfoBlock
						dark={true}
						heading="💌 82%+ Open Rate"
						text="Our average open rate has most of the time been above the industry benchmark."
					/>
				</div>
			</div>
		</div>
	);
};

export default StartGettingAppointmentsInTwoWeeks;
