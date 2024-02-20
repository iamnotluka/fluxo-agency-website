import React from "react";
import { useNavigate } from "react-router-dom";

const WhatWeDo = () => {
	const navigate = useNavigate();
	return (
		<div className="bg-black text-white sm:py-20 md:py-24 py-16 px-4">
			<div className="w-full max-w-3xl text-left sm:text-center pb-11 mx-auto">
				<h1 className="sm:text-4xl md:text-5xl text-2xl font-bold leading-tight">
					<span>
						Get 20-80 sales calles every signle month <br />
						<br />
					</span>
				</h1>
				<p className="text-white mt-6">
					<span>We will handle all of the technical bits that you don't want to be bothered with... and more. 👇</span>
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
					<li>Sales consulting</li>
				</ul>
			</div>
			<div className="w-full max-w-3xl text-left sm:text-center pb-11 mx-auto">
				<button
					onClick={() => {
						navigate("/demo");
					}}
					className="mt-10 sm:bg-transparent bg-white sm:border-2 sm:border-white sm:text-white text-black font-semibold py-4 px-6 sm:hover:bg-white sm:hover:text-black transition duration-150 ease-in-out w-full sm:w-auto"
				>
					Learn more
				</button>
			</div>
		</div>
	);
};

export default WhatWeDo;
