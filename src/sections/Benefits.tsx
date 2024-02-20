import React from "react";
import InfoBlock from "../components/InfoBlock";

const Benefits = () => {
	return (
		<div className="bg-black text-white sm:py-20 md:py-24 py-16 px-4">
			<div className="w-full max-w-3xl text-left sm:text-center pb-11 mx-auto">
				<h1 className="sm:text-4xl md:text-5xl text-2xl font-bold leading-tight">
					<span>Client winning lead generation services for growing B2B companies</span>
				</h1>
				<p className="text-gray-200 mt-6">
					<span>
						You can focus entirely on growing your business while we establish a steady flow of qualified business leads
						into your pipeline.
					</span>
				</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 max-w-5xl mx-auto">
				<InfoBlock
					emoji="🔍" // Emoji for "Lead Scraping and Research"
					heading="Lead Scraping and Research"
					text="We will find prospects, validate their data, and enrich existing lists with up-to-date info based on your requirements"
				/>
				<InfoBlock
					emoji="🤖" // Emoji for "AI Email Automation"
					heading="AI Email Automation"
					text="We will 10x your outreach without cold calls or manual outreach. Implementing our system will hypercharge your sales team's efficiency and fill your pipeline with vetted business leads."
				/>
				<InfoBlock
					emoji="📅" // Emoji for "Meetings Booked"
					heading="Meetings Booked"
					text="After we’ve launched the campaigns, sales calls will automatically appear in your calendar."
				/>
				<InfoBlock
					emoji="📊" // Emoji for "Optimising & A/B Testing"
					heading="Optimising & A/B Testing"
					text="In addition to bi-weekly reporting, we will also have a monthly reconciliation call to review recommended adjustments in order to continuously enhance the campaign’s performance."
				/>
			</div>
		</div>
	);
};

export default Benefits;
