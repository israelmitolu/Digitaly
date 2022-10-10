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
				duration: 1,
				delayChildren: 0.6,
				staggerChildren: 0.2,
			},
		},
	};
	const riseUpVariant2 = {
		hidden: {
			opacity: 0,
			y: 20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				delayChildren: 0.8,
				staggerChildren: 0.2,
			},
		},
	};

	const riseUpItem = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
	};

	const fade = {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
		},
	};

	const navVariants = {
		hidden: {
			opacity: 0,
			transition: {
				delay: 0.5,
				staggerChildren: 0.2,
				staggerDirection: -1,
			},
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 0.5,
				staggerChildren: 0.2,
				staggerDirection: 1,
			},
		},
	};

	const itemVariants = {
		hidden: {
			opacity: 0,
		},
		visible: { opacity: 1, transition: { duration: 1 } },
	};

	const tagVariant = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			scale: [0.5, 1],
			rotate: [-90, 0],
			transition: {
				duration: 1,
			},
		},
	};

	const values = {
		riseUpVariant,
		riseUpVariant2,
		riseUpItem,
		fade,
		navVariants,
		itemVariants,
		tagVariant,
	};
	return (
		<AnimationContext.Provider value={values}>
			{children}
		</AnimationContext.Provider>
	);
};
