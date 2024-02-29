interface InfoBlockProps {
	emoji?: string;
	heading: string;
	text: string;
	dark?: boolean;
	date?: string;
	blog?: boolean;
}

const InfoBlock = ({ emoji, heading, text, dark, date }: InfoBlockProps) => {
	const mainClass = `flex flex-col justify-center items-left sm:items-left pt-6 sm:m-auto px-4 py-5 h-full border-b-2 ${
		dark ? "text-gray-800" : "text-gray-100"
	} ${dark ? "border-gray-900" : "border-gray-200"} transition duration-150 ease-in-out`;
	return (
		<div className={mainClass}>
			{emoji && <div className="text-4xl">{emoji}</div>}
			<h3 className={`pt-4 text-xl w-full ${dark ? "text-black" : "text-gray-100"} font-bold`}>{heading}</h3>
			<p className="pt-4 pb-4 w-full">{text}</p>
			<p className="text-xs">
				<strong>Date:</strong> {date}
			</p>
		</div>
	);
};

export default InfoBlock;
