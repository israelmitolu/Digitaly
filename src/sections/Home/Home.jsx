import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import HomeBanner from "../../assets/images/Home Trump Banner.png";
import TrumpTag from "../../assets/images/Trump Tag.png";
import Button from "../../components/Button/Button";
import { FaTiktok, FaApple, FaAmazon } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { AnimationContext } from "../../context/animation";
import { motion } from "framer-motion";

const Home = () => {
  const { riseUpVariant, riseUpItem, fade } = useContext(AnimationContext);

  return (
    <div id="home" data-scroll-section>
      <Navbar />
      <div className="bg-[#f1f1f1] rounded-bl-[2rem] lg:rounded-bl-[4rem] rounded-br-[2rem] lg:rounded-br-[4rem] relative">
        <div className="h-[85vh] sl:h-[60vh] max-w-[1200px] m-auto relative">
          <div className="py-[2rem] flex flex-col items-center lg:flex-row lg:gap-8 lg:px-[2rem] px-[1rem]">
            <motion.div
              variants={riseUpVariant}
              initial="hidden"
              whileInView="visible"
              className="lg:w-[60%] text-center lg:text-left mb-8 lg:mb-0"
            >
              <div className="md:flex items-center">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={fade}
                  className="uppercase text-[3rem] md:text-[4rem] lg:text-[5rem] tracking-[-2px] lg:tracking-[-6px] leading-[4rem] lg:leading-[5rem] font-bold "
                >
                  Sharing
                </motion.h1>
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.7, duration: 1 },
                  }}
                  className="lg:h-[60px] h-[50px] md:ml-4 md:block hidden"
                  src={TrumpTag}
                  alt="Trump Tag"
                />
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={fade}
                className="uppercase text-[3rem] md:text-[4rem] lg:text-[5rem] tracking-[-2px] lg:tracking-[-6px] leading-[4rem] lg:leading-[5rem] font-bold "
              >
                Your Vision
              </motion.h1>
            </motion.div>
            <div className="lg:w-[40%] text-center lg:text-left">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={fade}
                className="lg:mb-8 mb-4 text-sm lg:text-base md:w-[80%] lg:w-full m-auto font-semibold text-gray-700"
              >
                We love to create experiences that enable people to connect,
                express themselves and establish meaningful relationships.
              </motion.p>
              <div className="flex flex-col items-center md:flex-row md:justify-center lg:justify-start">
                <motion.span initial={{ opacity: 0, y: 20 }} whileInView={fade}>
                  <Button className="flex items-center w-fit mb-4 md:mb-0 font-medium">
                    <span className="mr-4">Start Project</span>{" "}
                    <FiArrowUpRight />
                  </Button>
                </motion.span>
                <motion.div
                  variants={riseUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  className="md:ml-8 flex"
                >
                  <a href="">
                    <motion.div
                      variants={riseUpItem}
                      className="bg-black flex items-center justify-center text-white p-2 rounded-[50%] h-[50px] w-[50px] border-2 border-white"
                    >
                      <FaTiktok size={20} />
                    </motion.div>
                  </a>
                  <a href="">
                    <motion.div
                      variants={riseUpItem}
                      className="bg-black flex items-center justify-center text-white p-2 rounded-[50%] h-[50px] w-[50px] border-2 border-white -ml-2"
                    >
                      <FaApple size={20} />
                    </motion.div>
                  </a>
                  <a href="">
                    <motion.div
                      variants={riseUpItem}
                      className="bg-black flex items-center justify-center text-white p-2 rounded-[50%] h-[50px] w-[50px] border-2 border-white -ml-2"
                    >
                      <FaAmazon size={20} />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[-14rem] hidden md:block">
            <motion.img
              initial={{ opacity: 0, y: 100 }}
              whileInView={fade}
              viewport={{ once: true }}
              src={HomeBanner}
              className="w-[80%] m-auto"
              alt="Home Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
