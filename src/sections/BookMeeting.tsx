const BookMeeting = () => {
	return (
		<div className="bg-black text-white sm:py-20 md:py-24 py-10 pb-4 px-4">
			<div className="w-full max-w-3xl text-left sm:text-center pb-11 mx-auto">
				<h1 className="sm:text-5xl md:text-6xl text-4xl font-bold sm:leading-tight">
					<span>Yes... all this on a pay-for-result basis. 📈</span>
				</h1>
				<p className="text-white mt-6">
					<span>
						Set up a no-cost call and get a tailored strategy, exact pricing, timeline & answers to any questions you
						might have.
					</span>
				</p>
				<a href="https://tidycal.com/fluxo-agency" target="_blank" rel="noreferrer">
					<button className="mt-10 sm:bg-transparent bg-white sm:border-2 sm:border-white sm:text-white text-black font-semibold py-4 px-6 sm:hover:bg-white sm:hover:text-black transition duration-150 ease-in-out w-full sm:w-auto">
						Show Me How!
					</button>
				</a>
			</div>
		</div>
	);
};

export default BookMeeting;
