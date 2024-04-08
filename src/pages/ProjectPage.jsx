import "../index.scss";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import BambooProject from "../components/projects/BambooProject";
import BonzaiProject from "../components/projects/BonzaiProject";
import CircusProject from "../components/projects/CircusProject";
import ProProject from "../components/projects/ProProject";
import StickansProject from "../components/projects/StickansProject";

const ProjectPage = React.forwardRef((props, ref) => {
	const { scrollYProgress } = useScroll();

	return (
		<div ref={ref}>
			<CircusProject />
			<BonzaiProject />
			<ProProject />
			<BambooProject />
			<StickansProject />
			<motion.div
				className="progress-bar"
				style={{ scaleX: scrollYProgress }}
			/>
		</div>
	);
});

export default ProjectPage;
