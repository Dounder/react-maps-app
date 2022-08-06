import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./MapsApp";

if (!navigator.geolocation) {
	alert("Geolocation is not supported by your browser");
	throw new Error("Geolocation is not supported by your browser");
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
