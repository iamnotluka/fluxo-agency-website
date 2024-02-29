import { BlogType } from "../router/BlogsRoute";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";

interface BlogProps {
	blog: BlogType;
}

const Blog = ({ blog }: BlogProps) => {
	const [content, setContent] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getBlogContent = async (fileName: string) => {
			try {
				const contentPath = process.env.PUBLIC_URL + `/blogContent/${fileName}`;
				const response = await fetch(contentPath);
				const text = await response.text();
				setContent(text);
			} catch (error) {
				console.error("Error fetching blog content:", error);
				setContent("Failed to load blog content.");
			} finally {
				setLoading(false);
			}
		};

		getBlogContent(blog.content);
	}, [blog.content]);

	if (loading) {
		return <div>Loading blog content...</div>;
	}

	const goBackToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div>
			<div className={`bg-black text-white sm:py-14 py-2 px-4`}>
				<div className={`w-full max-w-3xl text-left py-2 mx-auto transition-all`}>
					<h1 className={`sm:text-4xl md:text-5xl text-xl font-bold sm:leading-tight`}>{blog.title}</h1>
					<p className="py-2 text-sm text-gray-200">
						Date: <span className="font-bold">{blog.date}</span>
					</p>
				</div>
			</div>
			<div className="bg-white text-black sm:py-10 md:py-10 py-5 pb-4 px-4">
				<div className="w-full max-w-3xl text-left sm:text-center pb-11 mx-auto">
					<div className="text-left bg-white text-black prose">
						<ReactMarkdown>{content}</ReactMarkdown>
					</div>
					<button
						onClick={goBackToTop}
						className="mt-8 sm:bg-transparent bg-black sm:border-2 sm:border-black sm:text-black text-white font-semibold py-4 px-6 hover:bg-black hover:text-white transition duration-150 ease-in-out w-full sm:w-auto"
					>
						Back to Top 👆
					</button>
				</div>
			</div>
		</div>
	);
};

export default Blog;
