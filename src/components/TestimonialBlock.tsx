import { TestimonialContent } from "../sections/Testimonials";

interface TestimonialBlockProps {
	content: TestimonialContent;
}

const TestimonialBlock: React.FC<TestimonialBlockProps> = ({ content }) => {
	return (
		<div className="flex flex-col justify-center bg-black md:h-full pt-6 mb-5">
			<div className="pt-6">
				<p className="text-white text-lg px-3">"{content.quote}"</p>
				<div className="flex items-center mt-4 w-full border-2 border-black px-1">
					<img src={content.companyImage} alt={content.personName} className="h-20 w-auto rounded-full" />
					<p className="text-gray-200 text-sm p-3">
						{content.personName}, {content.position} at {content.companyName}
					</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialBlock;
