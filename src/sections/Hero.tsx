const Hero = () => {
	return (
		<div className="bg-white text-black sm:py-20 md:py-24 py-10 pb-4 px-4">
			<div className="w-full max-w-3xl text-left sm:text-center pb-11 mx-auto">
				<h1 className="sm:text-5xl md:text-6xl text-4xl font-bold sm:leading-tight">
					<span>Your go-to B2B client acquisition partner! 🚀</span>
				</h1>
				<p className="text-gray-800 mt-6">
					<span>
						Let’s fill your calendar with qualified prospects on a pay-for-results basis by leveraging our deep industry
						know-how and a results-first philosophy.
					</span>
				</p>
				{/* <button
					onClick={() => {
						navigate("/demo");
					}}
				>
					Watch demo
				</button> */}
				<a href="https://tidycal.com/fluxo-agency" target="_blank" rel="noreferrer">
					<button className="mt-8 sm:bg-transparent bg-black sm:border-2 sm:border-black sm:text-black text-white font-semibold py-4 px-6 hover:bg-black hover:text-white transition duration-150 ease-in-out w-full sm:w-auto">
						Learn More
					</button>
				</a>
			</div>
		</div>
	);
};

export default Hero;
