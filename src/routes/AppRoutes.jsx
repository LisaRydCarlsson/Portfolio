import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProjectsPage from "../pages/ProjectsPage";
import BambooPopup from "../popups/BambooPopup";
import BonzaiPopup from "../popups/BonzaiPopup";
import CircusPopup from "../popups/CircusPopup";
import ProPopup from "../popups/ProPopup";
import StickansPopup from "../popups/StickansPopup";
import ScrollToTop from "../components/ScrollToTop";

function AppRoutes() {
	const homeRef = useRef(null);
	const projectsRef = useRef(null);
	const aboutRef = useRef(null);
	const contactRef = useRef(null);
	const circusRef = useRef(null);
	const bonzaiRef = useRef(null);
	const proRef = useRef(null);
	const bambooRef = useRef(null);
	const stickansRef = useRef(null);

	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route
					path="/"
					element={
						<TransitionGroup>
							<CSSTransition
								key="home"
								classNames="fade"
								timeout={200}
								nodeRef={homeRef}
							>
								<HomePage ref={homeRef} />
							</CSSTransition>
						</TransitionGroup>
					}
				/>
				<Route
					path="/projects"
					element={
						<TransitionGroup>
							<CSSTransition
								key="projects"
								classNames="fade"
								timeout={300}
								nodeRef={projectsRef}
							>
								<ProjectsPage ref={projectsRef} />
							</CSSTransition>
						</TransitionGroup>
					}
				/>
				<Route
					path="/about"
					element={
						<TransitionGroup>
							<CSSTransition
								key="about"
								classNames="fade"
								timeout={300}
								nodeRef={aboutRef}
							>
								<AboutPage ref={aboutRef} />
							</CSSTransition>
						</TransitionGroup>
					}
				/>
				<Route
					path="/contact"
					element={
						<TransitionGroup>
							<CSSTransition
								key="contact"
								classNames="fade"
								timeout={300}
								nodeRef={contactRef}
							>
								<ContactPage ref={contactRef} />
							</CSSTransition>
						</TransitionGroup>
					}
				/>
				<Route
					path="/popup/circus"
					element={
						<TransitionGroup>
							<CSSTransition
								key="pro"
								classNames="fade"
								timeout={300}
								nodeRef={circusRef}
							>
								<CircusPopup ref={circusRef} />
							</CSSTransition>
						</TransitionGroup>
					}
				/>
				<Route
					path="/popup/bonzai"
					element={
						<TransitionGroup>
							<CSSTransition
								key="pro"
								classNames="fade"
								timeout={300}
								nodeRef={bonzaiRef}
							>
								<BonzaiPopup ref={bonzaiRef} />
							</CSSTransition>
						</TransitionGroup>
					}
				/>
				<Route
					path="/popup/pro"
					element={
						<TransitionGroup>
							<CSSTransition
								key="pro"
								classNames="fade"
								timeout={300}
								nodeRef={proRef}
							>
								<ProPopup ref={proRef} />
							</CSSTransition>
						</TransitionGroup>
					}
				/>
				<Route
					path="/popup/bamboo"
					element={
						<TransitionGroup>
							<CSSTransition
								key="bamboo"
								classNames="fade"
								timeout={300}
								nodeRef={bambooRef}
							>
								<BambooPopup ref={bambooRef} />
							</CSSTransition>
						</TransitionGroup>
					}
				/>
				<Route
					path="/popup/stickans"
					element={
						<TransitionGroup>
							<CSSTransition
								key="stickans"
								classNames="fade"
								timeout={300}
								nodeRef={stickansRef}
							>
								<StickansPopup ref={stickansRef} />
							</CSSTransition>
						</TransitionGroup>
					}
				/>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	);
}

export default AppRoutes;
