import React, { useEffect, useRef } from "react";
import cvIcon from "../assets/icons/cv-icon.png";
import emailIcon from "../assets/icons/email-icon.png";
import linkedinIcon from "../assets/icons/linkedin-icon.png";
import webIcon from "../assets/icons/web-icon.png";
import instagramIcon from "../assets/icons/instagram-icon.png";
import githubIcon from "../assets/icons/github-icon.png";
import "../styling/pages/HomePage.scss";

const HomePage = React.forwardRef((props, ref) => {
	const typewriterRef = useRef(null);

	useEffect(() => {
		const phrase = "Hi, my name is Lisa! ";
		const el = typewriterRef.current;
		const speed = 0.2;
		let i = 0;

		// Funktion för att skriva ut hälsningsfrasen med typewriter-effekten
		const writeLoop = () => {
			if (i < phrase.length) {
				el.innerText = phrase.substring(0, i + 1);
				i += speed;
				requestAnimationFrame(writeLoop);
			}
		};

		writeLoop();
	}, []);

	return (
		<div ref={ref} className="page-wrapper--dark no-overflow page-wrapper-home">
			<main className="home-content">
				<section className="home-content__intro">
					<h1 className="home-content__intro__h1">
						<span ref={typewriterRef} id="typewriter"></span>
						<span id="cursor">|</span>
					</h1>
					<p className="home-content__intro__p home-content__intro__p__fade-in">
						I'm a UX designer and frontend developer, truly passionate about
						user experience and visual design. I love the process as much as the
						outcome and take a creative, collaborative, and strategic approach
						to defining and designing solutions.
					</p>
				</section>
				<section className="home-content__contact-icons">
					<a href="/cv-lisarydcarlsson.pdf" target="_blank" title="Link to CV">
						<img src={cvIcon} alt="CV Icon" />
					</a>
					<a
						href="https://github.com/"
						title="Link to GitHub"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={githubIcon} alt="GitHub icon" />
					</a>
					<a
						href="mailto:lisa@rydcarlsson.se"
						title="Send an e-mail"
						target="_blank"
					>
						<img src={emailIcon} alt="E-mail icon" />
					</a>
					<a
						href="https://www.linkedin.com/in/lisa-ryd-carlsson/"
						title="Go to LinkedIn"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={linkedinIcon} alt="LinkedIn icon" />
					</a>
					<a
						href="https://www.instagram.com/lisarydcarlsson.se/"
						title="Open Instagram"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={instagramIcon} alt="Instagram icon" />
					</a>
					<a
						href="https://www.lisarydcarlsson.se/"
						title="Discover webshop"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={webIcon} alt="Webshop icon" />
					</a>
				</section>
			</main>
			<footer className="footer--orange"></footer>
		</div>
	);
});

export default HomePage;
