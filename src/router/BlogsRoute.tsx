import Header from "../components/Header";
import Footer from "../components/Footer";

interface Blog {
	image: string;
	title: string;
	shortDescription: string;
	content: string;
	date: string;
}

const blogs: Blog[] = [
	{
		image: "N/A",
		title: "Secrets to quickly scaling a B2B business!",
		shortDescription: "A-Z guide to starting a business.",
		date: "27 February 2024",
		content: "",
	},
];

const BlogsRoute = () => {
	return (
		<div>
			<Header />

			<Footer />
		</div>
	);
};

export default BlogsRoute;
