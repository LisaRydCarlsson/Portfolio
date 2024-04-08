import "../styling/pages/AboutPage.scss";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import ReadMore from "../components/ReadMore";
import ScrollToTop from "../components/ScrollToTop";
import globeIcon from "../assets/icons/globe-wht.png";
import aboutInterior from "../assets/img/about-interior.png";
import meCircle from "../assets/img/me-circle.png";

const AboutPage = React.forwardRef((props, ref) => {
	const { scrollYProgress } = useScroll();

	const globeIconRef = useRef();

	useEffect(() => {
		const handleScroll = () => {
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
				globeIconRef.current.classList.add("slide-up");
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div ref={ref} className="page-wrapper page-wrapper--dark">
			<main>
				<section className="about-page">
					<div className="about-page__fullwidth">
						<h2>BACKGROUND IN SALES, E-COMMERCE & MARKETING</h2>
						<p>
							<strong className="p--bold">
								With my background spanning retail, wholesale, e-commerce, and
								marketing, I've had the privilege of gaining valuable experience
								across various industries.
							</strong>{" "}
							Through my journey in the business world, I've developed a deep
							understanding of market dynamics and consumer behavior, which
							guides my approach to every new endeavor. I aim to draw from
							diverse experiences that have shaped my professional path.
						</p>
					</div>
					<div className="about-page__fullwidth">
						<div className="about-page__photographer-section">
							<div className="about-page__photographer-section--img">
								<img
									className="about-interior-img"
									src={aboutInterior}
									alt="Interior image"
								/>
							</div>
							<div className="about-page__photographer-section--text">
								<h2>AN EYE FOR DETAILS</h2>
								<p>
									<strong className="p--bold">
										With a photographer's discerning eye, I've honed the art of
										capturing moments that transcend the ordinary.
									</strong>{" "}
									This unique perspective not only fuels my passion for visual
									storytelling but also enhances my approach to digital design
									and development.
								</p>
								<p className="hide-between-tablet-small-desktop">
									The ability to perceive and convey nuances in both light and
									composition lends itself seamlessly to creating impactful
									digital experiences.
								</p>

								<ReadMore
									readMoreText="Whether crafting intuitive user interfaces or designing
							captivating visuals, my background in photography enriches
							every aspect of my work, making it easier to leave a lasting
							digital impression."
								/>
							</div>
						</div>
					</div>
					<div className="about-page__fullwidth about-page__fullwidth__storytelling">
						<h2>IT’S ALL ABOUT VISUAL STORYTELLING</h2>
						<p>
							<strong className="p--bold">
								Fueled by a deep appreciation for visual storytelling, I have
								refined my skills in digital design through extensive work with
								Photoshop and InDesign.
							</strong>{" "}
							Whether creating art, developing marketing materials, or refining
							brand identities, I'm dedicated to delivering impactful creative
							work. My experience in marketing across diverse markets has
							provided me with valuable insights into the synergy of creativity
							and business.
						</p>
					</div>
					<div className="about-page__fullwidth">
						<h2>A PERFECT MIX OF UX-DESIGN & FRONTEND DEVELOPMENT</h2>
						<div className="about-page__designer-developer-section">
							<div className="about-page__designer-developer-section--text">
								<p>
									<strong className="p--bold">
										Driven by my profound passion for visual storytelling, my
										exploration through various courses has equipped me with a
										comprehensive skill set essential for modern web
										development.
									</strong>{" "}
								</p>
								<p>
									With a particular focus on UX-design, I've immersed myself in
									mastering UX/UI principles and methodologies, striving to
									create intuitive, user-centric designs that elevate digital
									experiences while upholding high standards of quality and
									professionalism.
								</p>
							</div>
							<div className="about-page__designer-developer-section--img">
								<img
									className="me-circle"
									src={meCircle}
									alt="Circle diagram"
								/>
							</div>
						</div>
						<ReadMore
							readMoreText="My expertise extends to frontend development, with a 
							focus on React and SCSS, enabling me to seamlessly translate design 
							concepts into functional and visually appealing web applications. <br /> 
						Furthermore, my education in programming has provided me with a strong 
						foundation to navigate the entire development process from concept to deployment, 
						with a keen focus on frontend technologies and user experience enhancement. <br />
						With a solid foundation in agile methodologies, version control, and collaboration 
						tools, I'm poised to contribute effectively to dynamic development teams. Through 
						continuous learning and practical application, I strive to create innovative 
						digital experiences that engage users and make a meaningful impact in the 
						ever-evolving digital landscape."
						/>
					</div>
					<div className="about-page__fullwidth about-page__fullwidth__solutions">
						<h2>LOOKING FOR SUSTAINABLE SOLUTIONS</h2>
						<p>
							<strong className="p--bold">
								With a genuine commitment to our planet and a dedication to
								ethical practices, I strive to integrate sustainability into my
								work.
							</strong>{" "}
							I enthusiastically collaborate with individuals and businesses
							that share my values of environmental stewardship, equality, and
							ethical conduct. By integrating sustainable principles into my
							work, I strive to create positive change and contribute to a
							greener, more equitable future for all.{" "}
						</p>
					</div>
					<div className="about-page__fullwidth">
						<h2>DEVELOPING IMPACTFUL DESIGN</h2>
						<p>
							<strong className="p--bold">
								Driven by a desire to make a meaningful impact, I am dedicated
								to leveraging my skills and expertise to create experiences that
								resonate with audiences on a profound level.
							</strong>{" "}
							Whether through captivating imagery, intuitive design, or
							strategic insights, my goal is to inspire, engage and leave a
							lasting impression.
						</p>
						<ReadMore
							readMoreText="I believe that every interaction and experience has contributed to
						my growth and understanding, allowing me to continually adapt and
						evolve in an ever-changing landscape. This voyage has been enriched
						by opportunities to immerse myself in different cultures and connect
						with people from all walks of life. It's these experiences that fuel
						my passion for creating meaningful connections and delivering
						impactful results in everything I do."
						/>
					</div>
					<img
						ref={globeIconRef}
						className="about-page__globe-icon"
						src={globeIcon}
						alt="Eco globe"
					/>

					<div className="about-page__fullwidth about-page__fullwidth--last">
						<h2 className="h2--centered">LET’S GET IN TOUCH!</h2>
						<p>
							Connect and co-create something amazing. Whether you're looking to
							elevate your brand with stunning visuals, tell your story through
							engaging content, develop a user-friendly website, enhance your
							digital presence, optimize your marketing strategy, or simply
							collaborate on a creative project, I'm here to bring your vision
							to life.
						</p>
					</div>
					<div className="about-page__btn-row">
						<Link to="/contact" className="btn--large btn--orange btn--connect">
							CONNECT
						</Link>
						<a
							href="/cv-lisarydcarlsson.pdf"
							target="_blank"
							title="Link to CV"
						>
							<button className="btn--large btn--white">SEE CV</button>
						</a>
						<button className="btn--large btn--white">TO GITHUB</button>
						<button
							className="btn--large btn--white"
							onClick={() =>
								window.open(
									"https://www.linkedin.com/in/lisa-ryd-carlsson/",
									"_blank",
									"noopener,noreferrer"
								)
							}
						>
							LINKEDIN
						</button>
						<ScrollToTop buttonColor="btn--orange" />
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

export default AboutPage;
