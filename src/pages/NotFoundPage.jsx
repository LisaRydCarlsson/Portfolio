import "../styling/pages/NotFoundPage.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import YogaAvatarImg from "../assets/img/lisa-yoga-avatar.png";

const NotFoundPage = () => {
	const [activePath, setActivePath] = useState("");

	const handleLinkClick = (path) => {
		setActivePath(path);
		localStorage.setItem("activePath", path);
	};

	return (
		<div className="page-wrapper--dark page-wrapper--not-found">
			<main className="not-found-content">
				<div className="not-found-content__main-container">
					<img
						className="avatar-img"
						src={YogaAvatarImg}
						alt="Lisa Avatar image"
					/>
					<div className="not-found-content__main-container__text">
						<h1>Oops! Page not found...</h1>
						<p>
							Looks like you've stumbled upon my yoga break instead of your
							intended destination. Let's turn this digital detour, into a
							moment of tranquility.
						</p>
						<p>Inhale, exhale, and let's navigate back together!</p>
					</div>

					<div className="not-found-content__main-container__btn-row">
						<Link
							to="/"
							onClick={() => handleLinkClick("/")}
							className={`btn--large btn--white not-found-content__main-container__btn-row__btn ${
								activePath === "/" ? "clicked" : ""
							}`}
						>
							<span className="hide-on-tablet">BACK TO&nbsp;</span>HOME
						</Link>

						<Link
							to="/projects"
							onClick={() => handleLinkClick("/projects")}
							className={`btn--large btn--orange not-found-content__main-container__btn-row__btn ${
								activePath === "/projects" ? "clicked" : ""
							}`}
						>
							<span className="hide-on-tablet">VIEW&nbsp;</span>PROJECTS
						</Link>
						<Link
							to="/contact"
							onClick={() => handleLinkClick("/contact")}
							className={`btn--large btn--white not-found-content__main-container__btn-row__btn ${
								activePath === "/contact" ? "clicked" : ""
							}`}
						>
							CONTACT<span className="hide-on-tablet">&nbsp;ME</span>
						</Link>
					</div>
				</div>
				<footer className="footer--orange"></footer>
			</main>
		</div>
	);
};

export default NotFoundPage;
