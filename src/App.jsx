import React from "react";
import Logo from "./assets/images/Logo.png";
// import Logo from "./assets/images/Logo.png";

const App = () => {
	return (
		<div className="bg-gray-300 h-screen flex items-center justify-center">
			<img src={Logo} alt='Logo' />
		</div>
	);
};

export default App;
