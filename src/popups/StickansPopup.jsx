// components/popups/ProPopup.jsx
import "../styling/popup/PopupGeneral.scss";
import React, { useEffect, useRef } from "react";
import StickansStart from "../assets/img/stickans-start.png";
import StickansLibrary from "../assets/img/stickans-library.png";
import ScrollToTop from "../components/ScrollToTop.jsx";
import GoBackBtn from "../components/GoBackBtn.jsx";

const StickansPopup = React.forwardRef((props, ref) => {
	return (
		<div ref={ref} className="page-wrapper page-wrapper--white">
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
							{/* <section className="popup__textImg-container__flexbox__text"> */}
							<section className="popup__textImg-container__flexbox__text--left">
								<h2 className="h2--2-line-centered">
									THE MOBILE APP <br /> FOR A UTILITY LIBRARY
								</h2>
								<p>
									<strong className="p--bold">
										Welcome to Stickan's Tool Library, an innovative venture
										inspired by the values of sharing and community. Stickan's
										community association has embraced sustainability and
										resourcefulness with this forward-thinking initiative.
									</strong>
								</p>
								<p>
									Inspired by the success of similar libraries for books and
									clothing, Stickan's Tool Library offers residents access to a
									wide array of tools for their home renovation and building
									projects.
								</p>
								<p>
									My task was to develop a mobile-friendly platform that
									facilitates seamless tool lending and borrowing. The platform
									features an intuitive authentication and login system,
									ensuring security and ease of access for users.
								</p>
							</section>
							{/* </section> */}
							<div className="popup__textImg-container__flexbox__img--right">
								<img
									className="stickans-img-01"
									src={StickansStart}
									alt="Stickans Start image"
								/>
							</div>
						</section>
					</section>
					<section className="popup__textImg-container">
						<section className="popup__textImg-container__flexbox">
							<div className="popup__textImg-container__flexbox__img--left">
								<img
									className="stickans-img-02"
									src={StickansLibrary}
									alt="Stickans Library image"
								/>
							</div>
							{/* <section className="popup__textImg-container__flexbox__text"> */}
							<section className="popup__textImg-container__flexbox__text--right">
								<p>
									With a simple search and selection interface, residents can
									effortlessly find the tools they need and reserve them for
									borrowing. Each tool is accompanied by a description and
									availability status, allowing users to see whether a tool is
									currently on loan or not.
								</p>
								<p>
									Users receive instant confirmation and receipts upon borrowing
									a tool, providing clarity throughout the process.
									Additionally, the app offers an overview of current loans and
									return items, helping users manage their projects efficiently.
								</p>
								<p>
									From concept to execution, Stickan's Tool Library embodies the
									spirit of community and sustainability for a more connected,
									resourceful future.
								</p>
							</section>
							{/* </section> */}
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

export default StickansPopup;
