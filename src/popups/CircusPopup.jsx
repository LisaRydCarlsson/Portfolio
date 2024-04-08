// components/popups/CircusPopup.jsx
import "../styling/popup/PopupGeneral.scss";
import React, { useEffect, useRef } from "react";
import CircusPopup01 from "../assets/img/circus-popup-01.png";
import CircusPopup02 from "../assets/img/circus-popup-02.png";
import CircusPopup03 from "../assets/img/circus-popup-03.png";
import ScrollToTop from "../components/ScrollToTop.jsx";
import GoBackBtn from "../components/GoBackBtn.jsx";

const CircusPopup = React.forwardRef((props, ref) => {
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
					<section className="popup__fullwidth-container circus__fullwidth-container">
						<h2 className="h2--centered">
							THE EXTRAVAGENT
							<br className="mobile-break" /> AMUSEMENT PARK
						</h2>
						<p>
							<strong className="p--bold">
								Welcome to The Circus, where the enchantment of amusement parks
								meets the excitement of the digital world. As a frontend
								developer student, I undertook a venture to recreate the vibrant
								energy of a lively carnival on the web.
							</strong>
						</p>
					</section>
					<section className="popup__textImg-container">
						<section className="popup__textImg-container__flexbox">
							<div className="popup__textImg-container__flexbox__img--left">
								<img
									className="circus-img-01"
									src={CircusPopup01}
									alt="Circus Carneval image"
								/>
							</div>
							{/* <section className="popup__textImg-container__flexbox__text"> */}
							<section className="popup__textImg-container__flexbox__text--right">
								<p>
									Inspired by the whimsical delights of Mardi Gras and the
									spine-tingling thrills of Halloween, I set out to craft an
									online experience that would capture the imagination of
									visitors.
								</p>
								<p>
									Central to this vision were a combination of carefully
									selected visuals and meticulously crafted animations,
									thoughtfully curated to inject the webpage with an
									irresistible energy.
								</p>
							</section>
							{/* </section> */}
						</section>
					</section>
					<section className="popup__textImg-container">
						<section className="popup__textImg-container__flexbox">
							{/* <section className="popup__textImg-container__flexbox__text"> */}
							<section className="popup__textImg-container__flexbox__text--left">
								<p>
									With the help of the anime.js library and a understanding of
									the animation principles, the webpage comes alive, inviting
									users to immerse themselves in the experience.
								</p>
								<p>
									My goal was to create a webpage that transcends the ordinary -
									a digital playground brimming with interactive elements
									awaiting exploration.
								</p>
							</section>
							{/* </section> */}
							<div className="popup__textImg-container__flexbox__img--right">
								<img
									className="circus-img-02"
									src={CircusPopup02}
									alt="Circus Show image image"
								/>
							</div>
						</section>
					</section>
					<section className="popup__fullwidth-container">
						<p>
							Through thoughtful design, meticulously curated images and
							carefully crafted animations every aspect of the digital park was
							infused with a sense of magic and wonder. Ready to experience the
							enchantment firsthand? Click below to explore!
						</p>
					</section>
					<div className="popup__fullwidth-container__img-container">
						<img
							className="popup__fullwidth-container__img-container__img circus-img-03"
							src={CircusPopup03}
							alt="Circus Casino image"
						/>
					</div>
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
						<button className="btn--large btn--white btn-run-app">
							RUN APP
						</button>
						<ScrollToTop buttonColor="btn--orange" className="scroll-to-top" />
					</section>
				</div>
			</div>
			<footer className="footer--orange"></footer>
		</div>
	);
});

export default CircusPopup;
