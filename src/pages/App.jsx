import React, { useState } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Header from "../components/Header.jsx";
import AppRoutes from "../routes/AppRoutes.jsx";

function App() {
	return (
		<Router>
			<ConditionalHeader />
			<AppRoutes />
		</Router>
	);
}

function ConditionalHeader() {
	const location = useLocation();
	const paths = [
		"/",
		"/projects",
		"/about",
		"/contact",
		"/popup/circus",
		"/popup/bonzai",
		"/popup/pro",
		"/popup/bamboo",
		"/popup/stickans",
	];

	if (
		location.pathname.includes("popup") ||
		!paths.includes(location.pathname)
	) {
		return null;
	}

	return <Header />;
}

export default App;
