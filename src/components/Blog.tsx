const Blog = () => {
	return (
		<div className="bg-black text-white sm:py-20 md:py-24 py-10 py-2 px-4">
			<div className="w-full max-w-3xl text-left sm:text-center py-11 mx-auto">
				<h1 className="sm:text-5xl md:text-6xl text-4xl font-bold sm:leading-tight">
					<span>Blog title</span>
				</h1>
				<p className="py-2 text-sm text-gray-200">
					Last updated: <span className="font-bold">[date]</span>
				</p>
			</div>
		</div>
	);
};

export default Blog;
