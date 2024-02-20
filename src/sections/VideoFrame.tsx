const VideoFrame = () => {
	const videoSrc = "https://www.youtube.com/embed/Gk8EGWoGnEQ";

	return (
		<div
			className="video-container"
			style={{ position: "relative", paddingBottom: "56.25%" /* 16:9 Aspect Ratio */, paddingTop: "25px", height: 0 }}
		>
			<iframe
				style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
				src={videoSrc}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				title="Embedded YouTube Video"
			></iframe>
		</div>
	);
};

export default VideoFrame;
