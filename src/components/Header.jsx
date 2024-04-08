// components/pages/Header.jsx
import "../styling/components/Header.scss";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
	const location = useLocation();
	const [activePath, setActivePath] = useState("");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		setActivePath(location.pathname);
	}, [location]);

	useEffect(() => {
		const storedPath = localStorage.getItem("activePath");
		if (storedPath) {
			setActivePath(storedPath);
		}
	}, []);

	const handleLinkClick = (path) => {
		setActivePath(path);
		localStorage.setItem("activePath", path);
	};

	useEffect(() => {
		if (window.innerWidth <= 768) {
			setIsMenuOpen(true);
		} else {
			setIsMenuOpen(false);
		}

		const handleResize = () => {
			if (window.innerWidth <= 768) {
				setIsMenuOpen(true);
			} else {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="header-container">
			<header>
				{isMenuOpen ? (
					<HamburgerMenu
						handleLinkClick={handleLinkClick}
						activePath={activePath}
					/>
				) : (
					<nav className="header__nav">
						<ul>
							<li>
								<Link
									to="/"
									onClick={() => handleLinkClick("/")}
									className={activePath === "/" ? "clicked" : ""}
								>
									home
								</Link>
							</li>
							<li>
								<Link
									to="/projects"
									onClick={() => handleLinkClick("/projects")}
									className={activePath === "/projects" ? "clicked" : ""}
								>
									projects
								</Link>
							</li>
							<li>
								<Link
									to="/about"
									onClick={() => handleLinkClick("/about")}
									className={activePath === "/about" ? "clicked" : ""}
								>
									about
								</Link>
							</li>
							<li>
								<Link
									to="/contact"
									onClick={() => handleLinkClick("/contact")}
									className={activePath === "/contact" ? "clicked" : ""}
								>
									contact
								</Link>
							</li>
						</ul>
					</nav>
				)}
			</header>
		</div>
	);
};

export default Header;
