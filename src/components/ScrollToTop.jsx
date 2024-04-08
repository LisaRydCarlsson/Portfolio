import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ buttonColor, className }) => {
	const { pathname } = useLocation();
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return isVisible ? (
		<div
			onClick={scrollToTop}
			className={`${className} ${buttonColor} btn--small`}
		>
			MOVE UP
		</div>
	) : null;
};

export default ScrollToTop;
