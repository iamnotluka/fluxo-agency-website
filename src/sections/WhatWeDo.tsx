const WhatWeDo = () => {
	return (
		<div className="bg-black text-white sm:py-20 md:py-24 py-16 px-4">
			<div className="w-full max-w-3xl text-left sm:text-center pb-11 mx-auto">
				<h1 className="sm:text-4xl md:text-5xl text-2xl font-bold leading-tight">
					<span>
						Get 30-100 sales calls every single month <br />
						<br />
					</span>
				</h1>
				<p className="text-white mt-6">
					<span>We will handle all of the technical bits so that you don't have to... and more. 👇</span>
				</p>
			</div>
			<div className="text-white w-full justify-left sm:justify-center flex">
				<ul className="custom-list text-lg font-semibold ">
					<li>DNS configuration</li>
					<li>Email account setup</li>
					<li>Verified leads that match your ideal customer persona</li>
					<li>Custom emails sequences</li>
					<li>Video scripts</li>
					<li>Pre/post call sequence</li>
					<li>Offer/product placement</li>
				</ul>
			</div>
			<div className="w-full max-w-3xl text-left sm:text-center mx-auto">
				{/* <button
					onClick={() => {
						navigate("/demo");
					}}
					className="mt-10 sm:bg-transparent bg-white sm:border-2 sm:border-white sm:text-white text-black font-semibold py-4 px-6 sm:hover:bg-white sm:hover:text-black transition duration-150 ease-in-out w-full sm:w-auto"
				>
					Learn more
				</button> */}
				<a href="https://calendly.com/fluxo-agency/free-strategy-call" target="_blank" rel="noreferrer">
					<button className="mt-10 sm:bg-transparent bg-white sm:border-2 sm:border-white sm:text-white text-black font-semibold py-4 px-6 sm:hover:bg-white sm:hover:text-black transition duration-150 ease-in-out w-full sm:w-auto">
						Learn more
					</button>
				</a>
			</div>
		</div>
	);
};

export default WhatWeDo;
