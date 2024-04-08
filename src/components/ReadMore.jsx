import React, { useState } from "react";
import "../index.scss";

function ReadMore({ readMoreText }) {
	const [isVisible, setIsVisible] = useState(false);

	const handleReadMoreClick = () => {
		setIsVisible(!isVisible);
	};

	const paragraphs = readMoreText.split("<br />").map(
		(paragraph, index) =>
			paragraph.trim() && (
				<p key={index} className="hidden-text">
					{paragraph}
				</p>
			)
	);
	let css = "read-more-section";

	if (isVisible === false) {
		css = css + " hidden";
	}

	return (
		<>
			<span className="read-more" onClick={handleReadMoreClick}>
				{isVisible ? "SHOW LESS" : "READ MORE"}
			</span>
			<div className={css}>{paragraphs}</div>
		</>
	);
}

export default ReadMore;
