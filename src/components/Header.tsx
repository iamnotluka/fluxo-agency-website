import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();

	return (
		<div className="bg-white top-0 sticky z-50 sm:px-16 px-4 flex sm:justify-between justify-left items-center w-full border-b-2 border-black">
			<button
				onClick={() => {
					navigate("/");
				}}
			>
				<div className="sm:py-6 py-3 ">
					<img className="max-h-12 mx-auto sm:mx-0" src="/fluxo-agency-logo.png" alt="FLUXO Agency Logo" />
				</div>
			</button>
			<a href="https://calendly.com/fluxo-agency/get-started" target="_blank" rel="noreferrer">
				<button className="bg-black hidden sm:block text-white font-semibold py-4 px-6 hover:bg-gray-800 transition duration-150 ease-in-out">
					Get Started
				</button>
			</a>
		</div>
	);
};

export default Header;
