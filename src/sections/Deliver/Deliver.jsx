import React, { useContext } from "react";
import Stats from "./Stats";
import Tag1 from "../../assets/images/Deliver Wave Tag.png";
import Tag2 from "../../assets/images/Deliver Trump Circle.png";
import { motion } from "framer-motion";
import { AnimationContext } from "../../context/animation";

const Deliver = () => {
  const { riseUpVariant, riseUpItem, tagVariant } =
    useContext(AnimationContext);
  return (
    <div
      id="about"
      data-scroll-section
      className="h-full text-white pt-[5rem] pb-[2rem] lg:w-[90%] max-w-[1200px] m-auto px-6 md:px-10 md:pt-[15rem] xxl:pt-[20rem]"
    >
      <Stats />
      <div>
        <motion.div
          variants={riseUpVariant}
          initial="hidden"
          whileInView="visible"
          className="flex justify-between items-center mb-8 mt-[4rem]"
        >
          <motion.p
            variants={riseUpItem}
            className="uppercase text-[1.5rem] font-semibold lg:text-[3rem] w-full lg:w-[30%] leading-[3rem]"
          >
            What we deliver
          </motion.p>
          <motion.img
            variants={riseUpItem}
            className="h-[80px] hidden lg:block"
            src={Tag1}
            alt="Tag 1"
          />
          <motion.img
            variants={tagVariant}
            className="hidden md:block md:h-[50px] lg:h-[80px]"
            src={Tag2}
            alt="Tag 2"
          />
        </motion.div>
        <motion.div
          variants={riseUpVariant}
          initial="hidden"
          whileInView="visible"
          className="flex flex-wrap md:flex-nowrap gap-8"
        >
          <motion.p
            variants={riseUpItem}
            className="text-[#929294] font-medium lg:text-base text-[80%]"
          >
            Custom digital strategy informed by a powerful appraisal & your
            business deserves more than a pre-packed strategy
          </motion.p>
          <motion.p
            variants={riseUpItem}
            className="text-[#929294] font-medium lg:text-base text-[80%]"
          >
            See the progress we are making & what's driving results, anytime, we
            keep you consistently, transparently informed.
          </motion.p>
          <motion.p
            variants={riseUpItem}
            className="text-[#929294] font-medium lg:text-base text-[80%]"
          >
            Services that dovetail together for your greatest ROI, rowing in the
            same direction towards your growth goals.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Deliver;
