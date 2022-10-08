import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Logo from "../../assets/images/Logo.png";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { AnimationContext } from "../../context/animation";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};

	const { riseUpVariant, riseUpItem, navVariants, itemVariants, tagVariant } =
		useContext(AnimationContext);

	return (
		<>
			<div className='bg-[#f1f1f1] relative z-10'>
				<motion.div
					variants={riseUpVariant}
					initial='hidden'
					whileInView='visible'
					className='flex flex-row justify-between items-center py-4 px-4 lg:px-8 pb-4 lg:pb-8 border-b border-[#dddddd] max-w-[1200px] m-auto'>
					<Link
						to='about'
						className='cursor-pointer text-gray-700 font-semibold text-[80%] lg:text-[1rem] pt-[8px] hidden md:flex'>
						<motion.span variants={riseUpItem}>About Us</motion.span>
					</Link>
					<Link
						to='project'
						className='cursor-pointer text-gray-700 font-semibold text-[80%] lg:text-[1rem] pt-[8px] hidden md:flex'>
						<motion.span variants={riseUpItem}>Project</motion.span>
					</Link>
					<Link to='home' className='cursor-pointer'>
						<motion.img
							variants={riseUpItem}
							src={Logo}
							alt='Logo'
							className='h-[25px]'
						/>
					</Link>
					<Link
						to='services'
						className='cursor-pointer text-gray-700 font-semibold text-[80%] lg:text-[1rem] pt-[8px] hidden md:flex'
						href=''>
						<motion.span variants={riseUpItem}>Services</motion.span>
					</Link>
					<Link
						to='contact'
						className='cursor-pointer text-gray-700 font-semibold text-[80%] lg:text-[1rem] pt-[8px] hidden md:flex'
						href=''>
						<motion.span variants={riseUpItem}> Contact Us</motion.span>{" "}
					</Link>
					<motion.div
						variants={tagVariant}
						className='md:hidden'
						onClick={handleNav}>
						<HiOutlineMenuAlt3 size={25} />
					</motion.div>
				</motion.div>
			</div>
			<AnimatePresence>
				<motion.div
					initial={{ left: "100%" }}
					animate={
						nav
							? { left: "0"}
							: { left: "100%", transition: { delay: 1 } }
					}
					className={`bg-black bg-center bg-[length:900%] h-screen z-50 fixed top-0 w-screen duration-300 `}>
					<motion.div
						initial='hidden'
						whileInView={nav ? "visible" : "hidden"}
						variants={navVariants}
						exit='hidden'
						className='backdrop-blur-[8px] h-screen'>
						<div
							onClick={handleNav}
							className='flex justify-end p-4 text-white'>
							<motion.span variants={tagVariant}>
								<FaTimes size={25} />
							</motion.span>
						</div>
						<div className='flex flex-col items-center text-white'>
							<Link
								to='about'
								onClick={handleNav}
								className='p-6 text-[1.5rem] hover:text-[2rem] transition-all duration-150 font-semibold'>
								<motion.span variants={itemVariants}> About Us</motion.span>
							</Link>
							<Link
								to='project'
								onClick={handleNav}
								className='p-6 text-[1.5rem] hover:text-[2rem] transition-all duration-150 font-semibold'>
								<motion.span variants={itemVariants}>Project</motion.span>
							</Link>
							<Link
								to='services'
								onClick={handleNav}
								className='p-6 text-[1.5rem] hover:text-[2rem] transition-all duration-150 font-semibold'>
								<motion.span variants={itemVariants}>Services</motion.span>
							</Link>
							<Link
								to='contact'
								onClick={handleNav}
								className='p-6 text-[1.5rem] hover:text-[2rem] transition-all duration-150 font-semibold'>
								<motion.span variants={itemVariants}>Contact Us</motion.span>
							</Link>
						</div>
					</motion.div>
				</motion.div>
			</AnimatePresence>
		</>
	);
};

export default Navbar;
