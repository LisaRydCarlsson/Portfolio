// components/GoBackBtn.jsx
import React from "react";

const GoBackBtn = ({ buttonColor = "btn--orange", className }) => {
	const handleGoBack = () => {
		window.history.back();
	};

	return (
		<button
			className={`btn--small ${buttonColor} ${className}`}
			onClick={handleGoBack}
		>
			GO BACK
		</button>
	);
};

export default GoBackBtn;
