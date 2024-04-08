import "../styling/pages/ProjectsPage.scss";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop";
import BambooIpadImage from "../assets/img/bamboo-project.png";
import BonzaiProject from "../assets/img/bonzai-project.png";
import CircusStart from "../assets/img/circus-project.png";
import ProStart from "../assets/img/pro-start.png";
import StickansStart from "../assets/img/stickans-start.png";
import uxUiIconB from "../assets/icons/ux-ui-icon-blk.png";
import uxUiIconW from "../assets/icons/ux-ui-icon-wht.png";
import reactIcon from "../assets/icons/react-icon-wht.png";
import scssIcon from "../assets/icons/scss-icon-wht.png";
import tsIcon from "../assets/icons/ts-icon-wht.png";
import awsIcon from "../assets/icons/aws-icon-wht.png";
import htmlIcon from "../assets/icons/html-icon-wht.png";
import cssIcon from "../assets/icons/css-icon-wht.png";
import jsIcon from "../assets/icons/js-icon-wht.png";

const ProjectsPage = React.forwardRef((props, ref) => {
	const { scrollYProgress } = useScroll();

	return (
		<div ref={ref} className="page-wrapper page-wrapper--dark">
			<main className="projects-content">
				<section className="project-bamboo">
					<div className="project-bamboo__container">
						<div className="project-bamboo__container__img">
							<img src={BambooIpadImage} alt="Bamboo Bites Restaurant image" />
						</div>
						<div className="project-bamboo__container__text">
							<h1>AN ASIAN TAKE AWAY RESTAURANT</h1>
							<p>
								I am thrilled to introduce our latest project: a responsive web
								application for Bamboo Bites, an innovative Asian fusion
								restaurant specializing in take-away cuisine.{" "}
								<span className="hide-on-tablet">
									Our fondness for Asian food and the desire to create a
									seamless and convenient digital experience prompted us to
									develop this platform.
								</span>{" "}
								Enjoy!
							</p>
						</div>
						<div className="project-bamboo__container__btns">
							<div className="project-bamboo__container__btns__icons">
								<img src={uxUiIconW} alt="UX / UI icon" />
								<img src={reactIcon} alt="REACT icon" />
								<img src={scssIcon} alt="SCSS icon" />
								<img src={tsIcon} alt="TS icon" />
								<img src={awsIcon} alt="TS icon" />
							</div>
							<div className="project-bamboo__container__btns__cta">
								<Link to="/popup/bamboo" className="btn--large btn--orange">
									DIVE IN
								</Link>
							</div>
						</div>
					</div>
				</section>

				<section className="project-pro">
					<div className="project-pro__container">
						<div className="project-pro__container__img">
							<img src={ProStart} alt="Pro Email Start image" />
						</div>
						<div className="project-pro__container__info">
							<div className="project-pro__container__info__text">
								<h1>
									AN E-MAIL CLIENT
									<span className="space"> </span>
									<br className="break" />
									FOR SENIORS
								</h1>
								<p>
									Tasked with creating a mobile-friendly email client for PRO,
									my mission was clear: design an interface catering to seniors
									aged 65 and above, emphasizing simplicity and clarity.
								</p>
								<p className="hide-on-tablet">
									I carefully curated a palette of calming colors and embraced a
									minimalist design approach. Complementary tones were selected
									to enhance readability, ensuring effortless navigation for
									users with visual impairments.{" "}
									<span className="hide-between-tablet-small-desktop">
										Accessibility took precedence, with adjustable font sizes
										and voice input options accommodating seniors with diverse
										needs.
									</span>
								</p>
							</div>
							<div className="project-pro__container__info__btns">
								<div className="project-pro__container__info__btns__icons">
									<img src={uxUiIconB} alt="UX / UI icon" />
								</div>
								<div className="project-pro__container__info__btns__cta">
									<Link to="/popup/pro" className="btn--large btn--orange">
										VIEW DETAILS
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="project-circus">
					<div className="project-circus__container">
						<div className="project-circus__container__img">
							<img src={CircusStart} alt="Bamboo Bites Restaurant image" />
						</div>
						<div className="project-circus__container__text">
							<h1>AN EXTRAVAGENT AMUSEMENT PARK</h1>
							<p>
								I was tasked with bringing the magic of a vibrant amusement park
								to life on the web. Trying to achieve the whimsy of carnival
								delights, the enchantment of Mardi Gras
								<span className="show-on-tablet">.</span>
								<span className="hide-on-tablet">
									, and the spine-tingling excitement of Halloween all rolled
									into one digital extravaganza. Feel free to step in to the
									wonderland for a epic adventure...
								</span>{" "}
							</p>
						</div>
						<div className="project-circus__container__btns">
							<div className="project-circus__container__btns__icons">
								<img src={uxUiIconW} alt="UX / UI icon" />
								<img src={htmlIcon} alt="REACT icon" />
								<img src={cssIcon} alt="SCSS icon" />
								<img src={jsIcon} alt="JS icon" />
							</div>
							<div className="project-circus__container__btns__cta">
								<Link to="/popup/circus" className="btn--large btn--orange">
									STEP INSIDE
								</Link>
							</div>
						</div>
					</div>
				</section>

				<section className="project-stickans">
					<div className="project-stickans__container">
						<div className="project-stickans__container__img">
							<img src={StickansStart} alt="Stickans Start image" />
						</div>
						<div className="project-stickans__container__info">
							<div className="project-stickans__container__info__text">
								<h1>
									A UTILITY LIBRARY
									<span className="space"> </span>
									<br className="break" />
									MOBILE APP
								</h1>

								<p>
									Welcome to Stickan’s Tool Library – where borrowing is the new
									owning! In a world consumed by ownership, Stickan’s community
									association has embraced the refreshing concept of sharing.
								</p>
								<p className="hide-on-tablet">
									Inspired by the rising tide of environmental awareness and
									mindful consumption, Stickan’s Tool Library aims to equip
									residents with the tools they need for their home projects,
									without the burden of ownership.
								</p>
								<p className="hide-on-tablet hide-between-tablet-small-desktop">
									Push the button to read more about Stickan's Tool Library and
									how to redefine the way we share and borrow tools.
								</p>
							</div>
							<div className="project-stickans__container__info__btns">
								<div className="project-stickans__container__info__btns__icons">
									<img src={uxUiIconB} alt="UX / UI icon" />
								</div>
								<div className="project-stickans__container__info__btns__cta">
									<Link to="/popup/stickans" className="btn--large btn--orange">
										GLANCE HERE
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="project-bonzai">
					<div className="project-bonzai__container">
						<div className="project-bonzai__container__img">
							<img src={BonzaiProject} alt="Bonzai Resort image" />
						</div>
						<div className="project-bonzai__container__text">
							<h1>A FUTURISTIC ECO RESORT</h1>
							<p>
								Venturing through two courses, we fused the realms of user
								experience design and web development. Tasked with crafting a
								digital oasis our team of two designed a UI followed by a solo
								sprint in programming.{" "}
								<span className="hide-on-tablet">
									Fueled by our shared vision of a future where sustainability
									meets innovation, we embarked on an exhilarating journey to
									design a virtual haven - a self-sustaining resort nestled
									amidst the crimson sands of Mars. You’re welcome to take a
									tour!
								</span>
							</p>
						</div>
						<div className="project-bonzai__container__btns">
							<div className="project-bonzai__container__btns__icons">
								<img src={uxUiIconW} alt="UX / UI icon" />
								<img src={htmlIcon} alt="REACT icon" />
								<img src={cssIcon} alt="SCSS icon" />
							</div>
							<div className="project-bonzai__container__btns__cta">
								<Link to="/popup/bonzai" className="btn--large btn--orange">
									EXPLORE NOW
								</Link>
							</div>
						</div>
						<ScrollToTop
							className="up-btn-container"
							buttonColor="btn--white"
						/>
					</div>
				</section>
			</main>
			<motion.div
				className="progress-bar"
				style={{ scaleX: scrollYProgress }}
			/>
		</div>
	);
});

export default ProjectsPage;
