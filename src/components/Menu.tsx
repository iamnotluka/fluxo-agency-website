import { useNavigate } from "react-router-dom";

const Menu = () => {
	const navigate = useNavigate();

	return (
		<div className="p-4">
			<div className="px-2 pb-2">
				{/* <button
					onClick={() => {
						navigate("/hyper-scale-automation");
					}}
					className="font-bold text-black hover:text-gray-800 transition duration-150 ease-in-out"
				>
					HyperScale Outbound System
				</button> */}
			</div>
			<div className="p-2 pb-4">
				<button
					onClick={() => {
						navigate("/blogs");
					}}
					className="font-bold text-black hover:text-gray-800 transition duration-150 ease-in-out"
				>
					Blog
				</button>
			</div>
			<div className="p-2 pb-4">
				<button
					onClick={() => {
						navigate("/our-story");
					}}
					className="font-bold text-black hover:text-gray-800 transition duration-150 ease-in-out"
				>
					Our story
				</button>
			</div>

			{/* <div className="p-2">
				{" "}
				<a href="#about-us" className="text-black hover:text-gray-800 transition duration-150 ease-in-out">
					Our case studies
				</a>
			</div> */}

			<div className="">
				<a href="https://tidycal.com/fluxo-agency" target="_blank" rel="noreferrer">
					<button className="bg-black text-white font-semibold w-full text-left py-2 px-6 my-3 hover:bg-gray-800 transition duration-150 ease-in-out">
						Work with us
					</button>
				</a>
			</div>
		</div>
	);
};

export default Menu;
