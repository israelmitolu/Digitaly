import Button from "../../components/Button/Button";
import { FiArrowUpRight } from "react-icons/fi";
import TeamMember1 from "../../assets/images/Team Member 1.png";
import TeamMember2 from "../../assets/images/Team Member 2.png";
import { useContext } from "react";
import { AnimationContext } from "../../context/animation";
import { motion } from "framer-motion";

const Team = () => {
  const { riseUpVariant2, riseUpVariant, tagVariant, riseUpItem } =
    useContext(AnimationContext);
  return (
    <div
      className="flex flex-col-reverse lg:flex-row lg:justify-between align-top text-[#e5e5e5] pb-[2rem] lg:w-[90%] max-w-[1200px] mt-8 m-auto px-6 md:px-10 xxl:pt-[3rem]"
      data-scroll-section
    >
      <div className="flex md:justify-between w-full md:w-[50%] lg:w-[46%]">
        <motion.div
          variants={riseUpVariant}
          initial="hidden"
          whileInView="visible"
          className=" flex flex-col items-center mr-8 md:mr-0"
        >
          <motion.img
            variants={tagVariant}
            src={TeamMember1}
            alt="John Travolta, CEO Digitaly"
            className="max-w-[18rem] h-auto mb-3 lg:mb-6 w-[6rem] lg:w-[10rem]"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.6 },
            }}
            className="text-center"
          >
            <p className="text-white md:text-xl lg:text-2xl">John Travolta</p>
            <span className="text-[#929294] text-[80%] lg:text-[100%]">
              CEO Digitaly
            </span>
          </motion.div>
        </motion.div>
        <motion.div
          variants={riseUpVariant}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col items-center"
        >
          <motion.img
            variants={tagVariant}
            src={TeamMember2}
            alt="Frank Staven, Art Director Digitaly"
            className="lg:max-w-[18rem] h-auto mb-3 lg:mb-6 w-[6rem] lg:w-[10rem]"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.6 },
            }}
            className="text-center"
          >
            <p className="text-white md:text-xl lg:text-2xl">Frank Staven</p>
            <span className="text-[#929294] text-[80%] lg:text-[100%]">
              Art Director Digitaly
            </span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={riseUpVariant2}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col lg:items-start lg:text-left w-full mb-8 lg:mb-0 lg:w-[46%]"
      >
        <motion.h2
          variants={riseUpItem}
          className="uppercase text-[1.5rem] lg:text-[3rem] font-semibold  leading-[3rem] text-[#e5e5e5] mb-4"
        >
          Meet Our Teams
        </motion.h2>
        <motion.p
          variants={riseUpItem}
          className="text-[#929294] font-medium lg:text-base text-[80%]"
        >
          Our team consists of more than 80 experienced and very passionate
          people at the cutting edge of all things digital marketing. We always
          give our best for you.
        </motion.p>
        <motion.div variants={riseUpItem}>
          <Button className="flex items-center w-fit mt-8 md:mb-0 text-black bg-[#e5e5e5] font-medium">
            <span className="mr-4 ">All Digitaly Team</span> <FiArrowUpRight />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Team;
