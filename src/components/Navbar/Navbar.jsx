import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Logo from "../../assets/images/Logo.png";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<>
			<div className='bg-[#f1f1f1] relative z-10'>
				<div className='flex flex-row justify-between items-center py-4 px-4 lg:px-8 pb-4 lg:pb-8 border-b border-[#dddddd] max-w-[1200px] m-auto'>
					<a
						className='text-gray-700 font-semibold text-[80%] lg:text-[1rem] pt-[8px] hidden md:flex'
						href=''>
						About Us
					</a>
					<a
						className='text-gray-700 font-semibold text-[80%] lg:text-[1rem] pt-[8px] hidden md:flex'
						href=''>
						Project
					</a>
					<a href=''>
						<img src={Logo} alt='Logo' className='h-[25px]' />
					</a>
					<a
						className='text-gray-700 font-semibold text-[80%] lg:text-[1rem] pt-[8px] hidden md:flex'
						href=''>
						Services
					</a>
					<a
						className='text-gray-700 font-semibold text-[80%] lg:text-[1rem] pt-[8px] hidden md:flex'
						href=''>
						Contact Us
					</a>
					<div className='md:hidden' onClick={handleNav}>
						<HiOutlineMenuAlt3 size={25} />
					</div>
				</div>
			</div>
			<div
				className={`bg-t-banner bg-center bg-[length:900%] h-screen z-50 fixed top-0 w-screen duration-300 ${
					nav ? "opacity-1 left-0" : "opacity-0 left-[100%]"
				}`}>
				<div className="backdrop-blur-[8px] h-screen">
					<div onClick={handleNav} className='flex justify-end p-4 text-white'>
						<FaTimes size={25} />
					</div>
					<div className='flex flex-col items-center text-white'>
						<a
							href=''
							className='p-6 text-[1.5rem] hover:text-[2rem] transition-all duration-150 font-semibold'>
							About Us
						</a>
						<a
							href=''
							className='p-6 text-[1.5rem] hover:text-[2rem] transition-all duration-150 font-semibold'>
							Project
						</a>
						<a
							href=''
							className='p-6 text-[1.5rem] hover:text-[2rem] transition-all duration-150 font-semibold'>
							Services
						</a>
						<a
							href=''
							className='p-6 text-[1.5rem] hover:text-[2rem] transition-all duration-150 font-semibold'>
							Contact Us
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
