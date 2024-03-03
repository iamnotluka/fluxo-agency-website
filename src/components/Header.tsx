import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Menu from "./Menu";

const Header = () => {
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const location = useLocation();

	useEffect(() => {
		setIsMenuOpen(false);

		const handleScroll = () => {
			setIsMenuOpen(false);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [location]);

	return (
		<div className="top-0 sticky z-10 ">
			<div className="bg-white sm:px-16 px-4 flex justify-between justify-left items-center w-full">
				<button
					onClick={() => {
						navigate("/");
					}}
				>
					<div className="sm:py-6 py-3">
						<img className="max-h-12 mx-auto sm:mx-0" src="/fluxo-agency-logo.png" alt="FLUXO Agency Logo" />
					</div>
				</button>
				<div className="items-center hidden md:flex">
					{" "}
					{/* <div className="p-4">
						<button
							onClick={() => {
								navigate("/hyper-scale-automation");
							}}
							className="font-bold text-black hover:text-gray-800 transition duration-150 ease-in-out"
						>
							HyperScale
						</button>
					</div> */}
					<div className="p-4 mr-5">
						<button
							onClick={() => {
								navigate("/our-story");
							}}
							className="font-bold text-black hover:text-gray-800 transition duration-150 ease-in-out"
						>
							Our story
						</button>
					</div>
					<div className="p-4 mr-6">
						<button
							onClick={() => {
								navigate("/blogs");
							}}
							className="font-bold text-black hover:text-gray-800 transition duration-150 ease-in-out"
						>
							Blog
						</button>
					</div>
					<a href="https://calendly.com/fluxo-agency/free-strategy-call" target="_blank" rel="noreferrer">
						<button className="bg-black text-white font-semibold py-4 px-6 hover:bg-gray-800 transition duration-150 ease-in-out">
							Work with us
						</button>
					</a>
				</div>

				{/* Hamburger Icon */}
				<div className="md:hidden">
					<button onClick={toggleMenu} className="text-black">
						<svg
							className="w-8 h-8"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16m-7 6h7"></path>
						</svg>
					</button>
				</div>
			</div>
			{/* Dropdown Menu with Slide-Down Animation */}
			<div
				className={`overflow-hidden transition-all duration-500 border-b-2 bg-white border-black ${
					isMenuOpen ? "h-48" : "h-0"
				}`}
			>
				<Menu />
			</div>
		</div>
	);
};

export default Header;
