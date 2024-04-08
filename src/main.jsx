// import React from "react";
// import ReactDOM from "react-dom";
// import "@fortawesome/fontawesome-free/css/all.min.css"; // Importera Font Awesome-stilarket
// import App from "./pages/App.jsx";
// import "./index.scss";

// ReactDOM.createRoot(document.getElementById("root")).render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// );

import React from "react";
import { createRoot } from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./pages/App.jsx";
import "./index.scss";

createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
