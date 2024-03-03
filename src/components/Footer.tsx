import { useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate();

	return (
		<div className="bg-white sm:px-16 px-4 flex justify-between justify-left items-center w-full border-t-2 border-black">
			<button
				onClick={() => {
					navigate("/");
				}}
			>
				<div className="sm:py-6 py-3 ">
					<img className="max-h-12 mx-auto sm:mx-0" src="/fluxo-agency-logo.png" alt="FLUXO Agency Logo" />
				</div>
			</button>
			<p className="text-xs text-right text-gray-500 hidden md:block">Copyright: © 2023 FLEXO Agency</p>
			<div className="text-right">
				<button
					onClick={() => {
						navigate("/privacy-policy");
					}}
				>
					<p className="pr-4 text-xs text-right text-gray-500">Privacy Policy</p>
				</button>
				<button
					onClick={() => {
						navigate("/terms-and-conditions");
					}}
				>
					<p className="text-xs text-right text-gray-500">Terms & Conditions</p>
				</button>
			</div>
		</div>
	);
};

export default Footer;
