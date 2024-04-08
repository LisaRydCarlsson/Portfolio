// components/popups/BonzaiPopup.jsx
import "../styling/popup/PopupGeneral.scss";
import React, { useEffect, useRef } from "react";
import BonzaiPopup01 from "../assets/img/bonzai-popup-01.png";
import BonzaiPopup02 from "../assets/img/bonzai-popup-02.png";
import ScrollToTop from "../components/ScrollToTop.jsx";
import GoBackBtn from "../components/GoBackBtn.jsx";

const BonzaiPopup = React.forwardRef((props, ref) => {
	return (
		<div ref={ref} className="page-wrapper page-wrapper--dark">
			<div className="popup">
				<div className="popup__wrapper">
					<section className="popup__goBack-container">
						<div className="popup__goBack-container__btn">
							<GoBackBtn buttonColor="btn--orange" />
						</div>
					</section>
					<section className="popup__textImg-container">
						<section className="popup__textImg-container__flexbox">
							{/* <section className="popup__textImg-container__flexbox__text"> */}
							<section className="popup__textImg-container__flexbox__text--left bonzai-first-text">
								<h2 className="h2--centered">THE FUTURISTIC ECO RESORT</h2>
								<p>
									<strong className="p--bold">
										Spanning over two different courses, this assignment was a
										comprehensive project in user experience design and web
										development.
									</strong>
								</p>
								<p>
									Initiated in the UX/UI course as a group assignment, the
									project aimed to craft a website for a futuristic eco resort
									for the company BONZAI.
								</p>
								<p>
									In the first course, technical requirements included creating
									an interactive prototype using Figma, supported by a
									meticulously crafted design system.
								</p>
							</section>
							{/* </section> */}
							<div className="popup__textImg-container__flexbox__img--right">
								<img
									className="popup-flex-img bonzai-img-01"
									src={BonzaiPopup01}
									alt="Bonzai Home image"
								/>
							</div>
						</section>
					</section>
					<section className="popup__fullwidth-container">
						<p>
							In the following course I was tasked with adopting semantic HTML
							to improve accessibility and SEO, adherence to the BEM naming
							convention for CSS, and the implementation of CSS Grid and Flexbox
							for efficient layout design as a solo project.
						</p>
						<p>
							Furthermore, user testing sessions were conducted in both courses
							to ensure the user-centricity of the website. These sessions
							provided invaluable insights and validation throughout the
							iterative design process. As one of the first assignments
							undertaken during my inaugural year, this project not only honed
							technical skills but also fostered a deeper understanding of user
							experience principles and the iterative nature of design.
						</p>
						<div className="popup__fullwidth-container__img-container">
							<img
								className="popup__fullwidth-container__img-container__img bonzai-img-02"
								src={BonzaiPopup02}
								alt="Bonzai Facilities image"
							/>
						</div>
					</section>
					<section className="popup__btnRow">
						<GoBackBtn buttonColor="btn--orange" className="go-back-btn" />
						<button className="btn--large btn--white btn--figma">
							<span className="hide-on-tablet">OPEN IN&nbsp;</span>FIGMA
						</button>
						<a
							href="https://github.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="btn--large btn--white btn--github">
								<span className="hide-on-tablet">VIEW&nbsp;</span>GITHUB
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

export default BonzaiPopup;
