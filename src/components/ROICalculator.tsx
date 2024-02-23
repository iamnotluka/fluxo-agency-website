import { useState } from "react";
import InfoBlock from "./InfoBlock";

const emailsSentInput = {
	takeItEasy: [5000, 10000],
	normal: [15000, 20000],
	toTheMoon: [30000, 40000],
};

const ROICalculator = () => {
	const [customerInputData, setCustomerInputData] = useState({
		closingRate: 15,
		averageDealSize: 6000,
		emailsSent: emailsSentInput.normal,
	});

	const fluxoResults = {
		openRate: 0.6,
		replyRate: 0.05,
		meetingRate: 0.05,
	};

	const estimatedMeetings = [
		Math.round(
			customerInputData.emailsSent[0] * fluxoResults.openRate * fluxoResults.replyRate * fluxoResults.meetingRate,
		),
		Math.round(
			customerInputData.emailsSent[1] * fluxoResults.openRate * fluxoResults.replyRate * fluxoResults.meetingRate,
		),
	];

	const estimatedClients = [
		Math.round((estimatedMeetings[0] * customerInputData.closingRate) / 100),
		Math.round((estimatedMeetings[1] * customerInputData.closingRate) / 100),
	];

	const estimatedRevenue = [
		estimatedClients[0] * customerInputData.averageDealSize,
		estimatedClients[1] * customerInputData.averageDealSize,
	];

	const formatCash = (num: number): string => `$${num.toLocaleString()}`;

	const handleChangeEmails = (emailsSent: number[]) => {
		setCustomerInputData({
			...customerInputData,
			emailsSent: emailsSent,
		});
	};
	return (
		<div className="bg-black text-white sm:pb-20 md:pb-24 py-16 px-4">
			<div className="w-full max-w-3xl text-left sm:text-center mx-auto">
				<h1 className="sm:text-4xl md:text-5xl text-2xl font-bold leading-tight">
					<span>📊 ROI Calculator</span>
				</h1>
				<p className="text-white mt-5 sm:mt-10">
					<span>
						We said that we are ROI driven - that means full transparency. Use our Price Calculator to see exactly what
						you could be getting from us.
					</span>
					<br></br>
					<br></br>
				</p>
			</div>
			<div className="w-full max-w-3xl text-left sm:text-center pb-5 mx-auto">
				<div>
					<p className="text-2xl font-bold mt-5">1. How quickly do you want to scale?</p>
					<br></br>
					<button
						className={`sm:bg-transparent ${
							customerInputData.emailsSent === emailsSentInput.takeItEasy ? "bg-white" : "text-white "
						} sm:border-2 sm:border-white sm:text-white text-black text-left font-semibold py-4 px-6 sm:mx-5 border-2 border-white sm:hover:bg-white sm:hover:text-black transition duration-150 ease-in-out w-full sm:w-auto`}
						onClick={() => handleChangeEmails(emailsSentInput.takeItEasy)}
					>
						🌱 Take it easy...
					</button>
					<button
						className={`mt-10 sm:bg-transparent ${
							customerInputData.emailsSent === emailsSentInput.normal ? "bg-white" : "text-white"
						} sm:border-2 sm:border-white sm:text-white text-black text-left font-semibold py-4 px-6 sm:mx-5 border-2 border-white sm:hover:bg-white sm:hover:text-black transition duration-150 ease-in-out w-full sm:w-auto`}
						onClick={() => handleChangeEmails(emailsSentInput.normal)}
					>
						🫡 Do what you've always done
					</button>
					<button
						className={`mt-10 sm:bg-transparent ${
							customerInputData.emailsSent === emailsSentInput.toTheMoon ? "bg-white" : "text-white"
						} sm:border-2 sm:border-white  border-2 border-white text-left sm:text-white text-black font-semibold py-4 px-6 sm:mx-5 sm:hover:bg-white sm:hover:text-black transition duration-150 ease-in-out w-full sm:w-auto`}
						onClick={() => handleChangeEmails(emailsSentInput.toTheMoon)}
					>
						🚀 To the moon!
					</button>
				</div>
				<div>
					<p className="text-2xl font-bold mt-10">2. What is your closing rate?</p>
					<p className="text-2xl py-4 text-center"> {`Closing rate: ${customerInputData.closingRate}%`}</p>
					<input
						className="slider-thumb w-full h-2 bg-white rounded-lg appearance-none cursor-pointer"
						type="range"
						min="5"
						max="100"
						step="5" // Adjust step size if needed
						value={customerInputData.closingRate}
						onChange={(e) =>
							setCustomerInputData({
								...customerInputData,
								closingRate: Number(e.target.value),
							})
						}
					/>
				</div>
				<div>
					<p className="text-2xl font-bold mt-10">3. What is your average deal size?</p>
					<p className="text-2xl  py-4 text-center">{`Deal size: ${formatCash(customerInputData.averageDealSize)}`}</p>
					<input
						className="slider-thumb w-full h-2 bg-white rounded-lg appearance-none cursor-pointer"
						type="range"
						min="2000"
						max="50000"
						step="2000" // Adjust step size if needed
						value={customerInputData.averageDealSize}
						onChange={(e) =>
							setCustomerInputData({
								...customerInputData,
								averageDealSize: Number(e.target.value),
							})
						}
					/>
				</div>
			</div>
			<div className="w-full max-w-3xl text-left sm:text-center sm:pb-11 mx-auto">
				<h1 className="sm:text-4xl md:text-4xl text-3xl mt-5 sm:mt-10 font-bold leading-tight">
					<span>See what you can expect! 👇</span>
				</h1>
			</div>
			<div className="bg-black grid grid-cols-1 sm:grid-cols-3 sm:gap-10 max-w-5xl mx-auto">
				<InfoBlock
					heading={`📅 ~${estimatedMeetings[0]}-${estimatedMeetings[1]}+ Appointments Per Month`}
					text={`We will send ${customerInputData.emailsSent[0].toLocaleString()}-${customerInputData.emailsSent[1].toLocaleString()} cold emails each month! These are expected results given our previous track record.`}
				/>
				<InfoBlock
					heading={`🤝 ~${estimatedClients[0]}-${estimatedClients[1]} New Deals Per Month`}
					text={`If your closing rate is at ${customerInputData.closingRate}%, expect this many deals each month.`}
				/>
				<InfoBlock
					heading={`💸 +${formatCash(estimatedRevenue[0])}-${formatCash(
						estimatedRevenue[1],
					)} Revenue Generated Per Month`}
					text={`One new deal means ${formatCash(customerInputData.averageDealSize)} in the bank. ${
						estimatedClients[0]
					}-${estimatedClients[1]} new clients means ${formatCash(estimatedRevenue[0])}-${formatCash(
						estimatedRevenue[1],
					)} in revenue. As simple as that!`}
				/>
			</div>
		</div>
	);
};

export default ROICalculator;
