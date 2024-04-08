import "../styling/popup/PopupGeneral.scss";
import React, { useEffect, useRef } from "react";
import proStart from "../assets/img/pro-start.png";
import proInbox from "../assets/img/pro-inbox.png";
import ScrollToTop from "../components/ScrollToTop.jsx";
import GoBackBtn from "../components/GoBackBtn.jsx";

const ProPopup = React.forwardRef((props, ref) => {
	return (
		<div ref={ref} className=" page-wrapper page-wrapper--white">
			<div className="popup">
				<div className="popup__wrapper popup__wrapper__white">
					<section className="popup__goBack-container">
						<div className="popup__goBack-container__btn">
							<div className="popup__goBack-container__btn">
								<GoBackBtn buttonColor="btn--orange" />
							</div>
						</div>
					</section>
					<section className="popup__textImg-container">
						<section className="popup__textImg-container__flexbox">
							<section className="popup__textImg-container__flexbox__text--left">
								<h2 className="h2--2-line-centered">
									THE E-MAIL CLIENT <br /> FOR SENIORS
								</h2>
								<p>
									I was tasked to design a mobile friendly email client for PRO
									and creating an interface tailored to seniors aged 65 and
									above.
								</p>
								<p>
									Prioritizing simplicity and clarity and armed with Figma, I
									set out to craft an app that exuded warmth, inclusivity, and
									intuitive functionality.
								</p>
								<p>
									Inspired by the ethos of PRO and guided by their brand
									identity, I curated a palette of soothing colors and embraced
									simplicity in design. Complementary hues were carefully chosen
									to enhance readability, ensuring that even those with visual
									impairments could navigate with ease.
								</p>
							</section>
							<div className="popup__textImg-container__flexbox__img--right">
								<img
									className="pro-img-01"
									src={proStart}
									alt="Pro Start image"
								/>
							</div>
						</section>
					</section>
					<section className="popup__textImg-container">
						<section className="popup__textImg-container__flexbox">
							<div className="popup__textImg-container__flexbox__img--left">
								<img
									className="pro-img-02"
									src={proInbox}
									alt="Pro Inbox image"
								/>
							</div>
							<section className="popup__textImg-container__flexbox__text--right">
								<p>
									Accessibility was paramount, with features such as adjustable
									font sizes catering to seniors with varying visual acuity and
									voice input options for those with motor impairments.
								</p>
								<p>
									Throughout the design process, user feedback was instrumental.
									Multiple rounds of user testing helped refine the prototype,
									ensuring that every interaction felt natural and intuitive.
								</p>
								<p>
									You can experience the full prototype in Figma by clicking the
									button below.
								</p>
							</section>
						</section>
					</section>
					<section className="popup__btnRow--figma">
						<GoBackBtn buttonColor="btn--orange" />
						<button className="btn--large btn--dark">
							<span className="hide-on-tablet">OPEN IN&nbsp;</span>FIGMA
						</button>
						<ScrollToTop buttonColor="btn--orange" />
					</section>
				</div>
			</div>
			<footer className="footer--orange"></footer>
		</div>
	);
});

export default ProPopup;
