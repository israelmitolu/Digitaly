import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Logo from "../../assets/images/Logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<>
			<div className='bg-[#f1f1f1] relative z-10'>
				<div className='flex flex-row justify-between items-center py-4 px-4 lg:px-8 pb-4 lg:pb-8 border-b border-[#dddddd] max-w-[1200px] m-auto'>
					<Link
						to='about'
						className='cursor-pointer text-gray-700 font-semibold text-[80%] lg:text-[1rem] pt-[8px] hidden md:flex'>
						About Us
					</Link>
					<Link
						to='project'
						className='cursor-pointer text-gray-700 font-semibold text-[80%] lg:text-[1rem] pt-[8px] hidden md:flex'>
						Project
					</Link>
					<Link to='home' className="cursor-pointer">
						<img src={Logo} alt='Logo' className='h-[25px]' />
					</Link>
					<Link to='services'
						className='cursor-pointer text-gray-700 font-semibold text-[80%] lg:text-[1rem] pt-[8px] hidden md:flex'
						href=''>
						Services
					</Link>
					<Link to='contact'
						className='cursor-pointer text-gray-700 font-semibold text-[80%] lg:text-[1rem] pt-[8px] hidden md:flex'
						href=''>
						Contact Us
					</Link>
					<div className='md:hidden' onClick={handleNav}>
						<HiOutlineMenuAlt3 size={25} />
					</div>
				</div>
			</div>
			<div
				className={`bg-black bg-center bg-[length:900%] h-screen z-50 fixed top-0 w-screen duration-300 ${
					nav ? "opacity-1 left-0" : "opacity-0 left-[100%]"
				}`}>
				<div className='backdrop-blur-[8px] h-screen'>
					<div onClick={handleNav} className='flex justify-end p-4 text-white'>
						<FaTimes size={25} />
					</div>
					<div className='flex flex-col items-center text-white'>
						<Link
							to='about'
							onClick={handleNav}
							className='p-6 text-[1.5rem] hover:text-[2rem] transition-all duration-150 font-semibold'>
							About Us
						</Link>
						<Link
							to='project'
							onClick={handleNav}
							className='p-6 text-[1.5rem] hover:text-[2rem] transition-all duration-150 font-semibold'>
							Project
						</Link>
						<Link
							to='services'
							onClick={handleNav}
							className='p-6 text-[1.5rem] hover:text-[2rem] transition-all duration-150 font-semibold'>
							Services
						</Link>
						<Link
							to='contact'
							onClick={handleNav}
							className='p-6 text-[1.5rem] hover:text-[2rem] transition-all duration-150 font-semibold'>
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
