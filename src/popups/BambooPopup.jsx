// components/popups/BambooPopup.jsx
import "../styling/popup/PopupGeneral.scss";
import React, { useEffect, useRef } from "react";
import BambooPopup01 from "../assets/img/bamboo-popup-01.png";
import BambooPopup02 from "../assets/img/bamboo-popup-02.png";
import ScrollToTop from "../components/ScrollToTop.jsx";
import GoBackBtn from "../components/GoBackBtn.jsx";

const BambooPopup = React.forwardRef((props, ref) => {
	return (
		<div ref={ref} className="page-wrapper page-wrapper--dark">
			<div className="popup">
				<div className="popup__wrapper">
					<section className="popup__goBack-container">
						<div className="popup__goBack-container__btn">
							<div className="popup__goBack-container__btn">
								<GoBackBtn buttonColor="btn--orange" />
							</div>
						</div>
					</section>
					<section className="popup__fullwidth-container">
						<h2 className="h2--centered">THE FULLSTACK TEAM CHALLENGE</h2>
						<p className="bamboo-full-text-01">
							<strong className="p--bold">
								As our team of three delved into the realm of agile development,
								we embraced the Scrum methodology to embark on an exciting
								journey of creating a cutting-edge digital solution for Bamboo
								Bites, an Asian fusion take-away restaurant.
							</strong>
						</p>
					</section>
					<section className="popup__textImg-container flex-img-text-dark">
						<section className="popup__textImg-container__flexbox">
							<div className="popup__textImg-container__flexbox__img--left">
								<img
									className="bamboo-img-01"
									src={BambooPopup01}
									alt="Bamboo Bites Home image"
								/>
							</div>
							{/* <section className="popup__textImg-container__flexbox__text"> */}
							<section className="popup__textImg-container__flexbox__text--right">
								<p>
									To ensure a user-centered design process, we have utilized the
									Design Thinking approach, created prototypes and conducted
									tests. By crafting personas for both our customers and
									employees, we have been able to tailor our web application to
									meet the unique needs and preferences of each individual.
								</p>
								<p>
									Built on React, our frontend captivates users from the first
									click. Our use of SCSS and TypeScript has enabled a clean and
									efficient code structure, while our focus on "mobile-first"
									design ensures a smooth user experience across devices.
								</p>
							</section>
							{/* </section> */}
						</section>
					</section>
					<section className="popup__textImg-container flex-img-text-dark">
						<section className="popup__textImg-container__flexbox">
							{/* <section className="popup__textImg-container__flexbox__text"> */}
							<section className="popup__textImg-container__flexbox__text--left">
								<p>
									On the backend, we have leveraged modern tools and
									technologies to create a robust and reliable platform for our
									web application. By integrating AWS services we have ensured a
									scalable and high-performance backend infrastructure.
								</p>
								<p>
									Finally we deployed our web application online using Vercel,
									providing our customers with the opportunity to explore Bamboo
									Bites wherever they may be.
								</p>
							</section>
							{/* </section> */}
							<div className="popup__textImg-container__flexbox__img--right">
								<img
									className="bamboo-img-02"
									src={BambooPopup02}
									alt="Bamboo Bites Menu image"
								/>
							</div>
						</section>
					</section>
					<section className="popup__fullwidth-container">
						<p className="bamboo-full-text-02">
							With most of the technical details explained, thank you for taking
							the time to explore our work with Bamboo Bites. Now, feel free to
							dive into our live app - your Asian culinary adventure awaits!
						</p>
					</section>
					<section className="popup__btnRow">
						<GoBackBtn buttonColor="btn--orange" className="go-back-btn" />
						<a
							href="https://github.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="btn--large btn--white btn--github">
								<span className="hide-on-tablet">VIEW&nbsp;</span>GITHUB
							</button>
						</a>
						<a
							href="https://bamboo-bites-main.vercel.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="btn--large btn--white btn-run-app">
								RUN APP
							</button>
						</a>
						<ScrollToTop buttonColor="btn--orange" className="scroll-to-top" />
					</section>
				</div>
			</div>
			<footer className="footer--orange"></footer>
		</div>
	);
});

export default BambooPopup;
