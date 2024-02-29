import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string"; // You might need to install this package
import Header from "../components/Header";
import Footer from "../components/Footer";
import Blog from "../components/Blog";
import InfoBlock from "../components/InfoBlock";
import Benefits from "../sections/Benefits";
import StartGettingAppointmentsInTwoWeeks from "../sections/StartGettingAppointmentsInTwoWeeks";
import ROICalculator from "../components/ROICalculator";
import BookMeeting from "../sections/BookMeeting";

export interface BlogType {
	title: string;
	shortDescription: string;
	content: string;
	date: string;
}

const blogs: BlogType[] = [
	{
		title: "Solving B2B Problems at Scale",
		shortDescription: "How to essentially start any service based business.",
		date: "27 February 2024",
		content: "scaling_business_quickly.txt",
	},
	{
		title: "Placibo Effect of Positive Thinking",
		shortDescription: "Why you should think positively for the sake of thinking positively.",
		date: "15 December 2023",
		content: "why_be_positive.txt",
	},
];

const BlogsRoute = () => {
	const [selectedBlog, setSelectedBlog] = useState<BlogType | null>(null);
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		const queryParams = queryString.parse(location.search);
		const blogUrl = queryParams["blog-url"];

		if (blogUrl) {
			const blog = blogs.find((blog) => blog.title.replace(/\s+/g, "-").toLowerCase() === blogUrl);
			setSelectedBlog(blog || null);
		} else {
			setSelectedBlog(null);
		}
	}, [location.search]);

	const handleSelectBlog = (blog: BlogType) => {
		// Update the URL with the selected blog's title as a parameter
		const blogUrl = blog.title.replace(/\s+/g, "-").toLowerCase();
		navigate(`/blogs?blog-url=${blogUrl}`);
	};

	return (
		<div>
			<Header />

			{selectedBlog ? (
				<Blog blog={selectedBlog} />
			) : (
				<div>
					<div className="bg-black text-white sm:py-20 md:py-24 py-2 px-4">
						<div className="w-full max-w-3xl text-left sm:text-center py-11 mx-auto">
							<h1 className="sm:text-5xl md:text-6xl text-4xl font-bold sm:leading-tight">
								<span>Blog</span>
							</h1>
							<p className="py-2 text-white">Hope you find something useful!</p>
						</div>
					</div>
					<div className="sm:py-20 pb-20">
						<div className="bg-white">
							<div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 max-w-5xl mx-auto">
								{blogs.map((blog, index) => (
									<button onClick={() => handleSelectBlog(blog)} className="text-left">
										<InfoBlock
											dark={true}
											emoji="" // Emoji for "Lead Scraping and Research"
											heading={blog.title}
											text={blog.shortDescription}
											date={blog.date}
											blog={true}
										/>
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
			)}
			<Benefits />
			<StartGettingAppointmentsInTwoWeeks />
			<ROICalculator />
			<BookMeeting />
			<Footer />
		</div>
	);
};

export default BlogsRoute;
