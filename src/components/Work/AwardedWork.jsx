import { useContext } from "react";
import { AnimationContext } from "../../context/animation";
import Label from "../Label/Label";
import { motion } from "framer-motion";

const AwardedWork = ({ labels, caption, title, icon, className }) => {
	return (
		<div className='mt-5 lg:mt-10'>
			{/* The head */}
			<div className='flex flex-col lg:flex-row justify-between lg:items-center'>
				<div className='flex flex-wrap justify-center md:justify-start mb-[1.5rem]'>
					{/* Map through the Labels     */}
					{labels.map((label, index) => {
						return (
							<motion.div
								initial={{
									opacity: 0,
									y: 20,
								}}
								whileInView={{
									opacity: 1,
									y: 0,
									transition: { duration: 0.8, delay: label.delay },
								}}
								key={index} className='mb-6 sm:mb-0'>
								<Label>
									<span className='text-[90%] font-lato font-semibold'>
										{label.name}
									</span>
								</Label>
							</motion.div>
						);
					})}
				</div>
				<motion.div
					initial={{
						opacity: 0,
						y: 20,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
						transition: { duration: 0.8, delay: 0.6 },
					}}
					className='text:lg lg:text-2xl hidden lg:flex uppercase text-[#929294] font-semibold'>
					&copy; {caption}
				</motion.div>
			</div>

			{/* The body */}
			<motion.div
				initial={{
					opacity: 0,
					y: 60,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: { duration: 0.8, delay: 0.5 },
				}}
        viewport={{ once: true }}
				className={`${className} h-50 w-full bg-no-repeat bg-cover bg-right mt-2 lg:mt-6 rounded-[1.5rem] md:rounded-[2.5rem] px-5 py-10 lg:p-10 text-white `}>
				<div className='text-3xl text-center md:text-left lg:text-7xl uppercase font-bold w-[100%] lg:w-[40%]'>
					<h3 className='relative'>
						{title}
						<span
							className='
            absolute ml-4 bottom-1 center'>
							<img
								src={icon}
								alt=''
								className='w-auto h-8 lg:h-16 hidden md:flex'
							/>
						</span>
					</h3>
				</div>
			</motion.div>
		</div>
	);
};

export default AwardedWork;
