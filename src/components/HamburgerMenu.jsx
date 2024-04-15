import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/components/HamburgerMenu.scss";

const HamburgerMenu = ({ handleLinkClick, activePath }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="hamburger-menu">
			<button onClick={toggleMenu}>
				<div className="hamburger-icon-wrapper">
					<div className="hamburger-icon">
						<span className={`line ${isOpen ? "open" : ""}`}></span>
						<span className={`line ${isOpen ? "open" : ""}`}></span>
						<span className={`line ${isOpen ? "open" : ""}`}></span>
					</div>
				</div>
			</button>
			<ul className={isOpen ? "visible" : ""}>
				<li>
					<Link
						to="/"
						onClick={() => {
							handleLinkClick("/");
							toggleMenu();
						}}
						className={activePath === "/" ? "clicked" : ""}
					>
						HOME
					</Link>
				</li>
				<li>
					<Link
						to="/projects"
						onClick={() => {
							handleLinkClick("/projects");
							toggleMenu();
						}}
						className={activePath === "/projects" ? "clicked" : ""}
					>
						PROJECTS
					</Link>
				</li>
				<li>
					<Link
						to="/about"
						onClick={() => {
							handleLinkClick("/about");
							toggleMenu();
						}}
						className={activePath === "/about" ? "clicked" : ""}
					>
						ABOUT
					</Link>
				</li>
				<li>
					<Link
						to="/contact"
						onClick={() => {
							handleLinkClick("/contact");
							toggleMenu();
						}}
						className={activePath === "/contact" ? "clicked" : ""}
					>
						CONTACT
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default HamburgerMenu;
