import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AnimationContextWrapper } from "./context/animation";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AnimationContextWrapper>
			<App />
		</AnimationContextWrapper>
	</React.StrictMode>
);
