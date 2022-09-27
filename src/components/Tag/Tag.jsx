import React from "react";

const Tag = ({ children, className }) => {
	return (
		<div className={`cursor-pointer py-1 px-4 bg-transparent border border-[#929294] w-fit rounded-[1.5rem] font-semibold text-[#929294] uppercase ${className}`}>
			{children}
		</div>
	);
};

export default Tag;
