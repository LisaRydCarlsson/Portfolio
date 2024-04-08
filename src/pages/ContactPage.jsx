import "../styling/pages/ContactPage.scss";
import React, { useRef } from "react";
import AvatarImg from "../assets/img/lisa-avatar.png";
import CvIcon from "../assets/icons/cv-icon-white.png";
import GithubIcon from "../assets/icons/github-icon-white.png";
import InstagramIcon from "../assets/icons/instagram-icon-white.png";
import LinkedinIcon from "../assets/icons/linkedin-icon-white.png";
import WebIcon from "../assets/icons/web-icon-white.png";
import ContactForm from "../components/ContactForm";

const ContactPage = React.forwardRef((props, ref) => {
	return (
		<div ref={ref} className=" page-wrapper--dark page-wrapper--contact">
			<main className="contact-content">
				<section className="contact-content__header-container">
					<h2 className="h2--centered contact-content__header-container__h2">
						REACH OUT AND LET’S EXPLORE
						<span className="space"> </span>
						<br className="tablet-break" />
						POSSIBILITIES TOGETHER!
					</h2>
					<div className="contact-content__header-container__img">
						<img
							className="avatar-img"
							src={AvatarImg}
							alt="Lisa Avatar image"
						/>
					</div>
					<section className="contact-content__header-container__text">
						<p>
							Whether you have a specific project in mind or just want to
							brainstorm ideas, don't hesitate to get in touch. I'm passionate
							about collaborating to create impactful solutions tailored to your
							needs.{" "}
							<span className="hide-on-tablet">
								From crafting compelling visuals to refining your digital
								strategy, let's work together to bring your vision to life. Your
								journey towards success starts with a simple conversation.
							</span>
						</p>
					</section>
				</section>

				<section className="contact-content__bottom-container">
					<section className="contact-content__bottom-container__business-info">
						<section className="address">
							<h3>LONG STORY SHORT AB</h3>
							<p>Lisa Ryd-Carlsson</p>
							<p>Nymilsgatan 27</p>
							<p>421 70 Västra Frölunda</p>
						</section>
						<section className="contact">
							<a className="link-p" href="tel:+46708886336">
								+46 (0)70 888 63 36
							</a>
							<a
								className="link-p"
								href="mailto:lisa@rydcarlsson.se"
								target="_blank"
							>
								<p>lisa@rydcarlsson.se</p>
							</a>
						</section>
						<section className="contact-btn-row">
							<a
								title="Go to CV"
								href="/cv-lisarydcarlsson.pdf"
								target="_blank"
							>
								<img src={CvIcon} alt="CV Icon" />
							</a>
							<a
								href="https://github.com/"
								title="Link to GitHub"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={GithubIcon} alt="GitHub icon" />
							</a>

							<a
								title="Open Instagram"
								href="https://www.instagram.com/lisarydcarlsson.se/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={InstagramIcon} alt="Instagram icon" />
							</a>
							<a
								title="Go to LinkedIn"
								href="https://www.linkedin.com/in/lisa-ryd-carlsson/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={LinkedinIcon} alt="LinkedIn icon" />
							</a>
							<a
								title="Discover webshop"
								href="https://www.lisarydcarlsson.se/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={WebIcon} alt="Webshop icon" />
							</a>
						</section>
					</section>
					<section className="contact-content__bottom-container__form">
						<ContactForm />
					</section>
				</section>
				<footer className="footer--orange"></footer>
			</main>
		</div>
	);
});

export default ContactPage;
