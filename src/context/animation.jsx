import { createContext } from "react";

export const AnimationContext = createContext();

export const AnimationContextWrapper = ({ children }) => {
	const riseUpVariant = {
		hidden: {
			opacity: 0,
			y: 20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1.5,
				delayChildren: .3,
				staggerChildren: 0.2
			},
		},
	};
	const riseUpItem = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};
	const values = {
		riseUpVariant, riseUpItem
	};
	return (
		<AnimationContext.Provider value={values}>
			{children}
		</AnimationContext.Provider>
	);
};
