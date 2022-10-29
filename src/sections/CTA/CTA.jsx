import Button from "../../components/Button/Button";
import { FiArrowUpRight } from "react-icons/fi";
import CtaBanner from "../../assets/images/Start Project Bg.png";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section
      id="contact"
      data-scroll-section
      className="text-[#fff] pb-[2rem] lg:w-[90%] max-w-[1200px] m-auto px-6 md:px-10 mt-[3rem]"
    >
      <div className="relative">
        <motion.img
          initial={{
            opacity: 0,
            y: 150,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.4 },
          }}
          src={CtaBanner}
          alt=""
          className="max-w-full w-full h-[10rem] md:h-auto object-cover rounded-2xl md:rounded-none"
        />
        <div className="absolute top-5 left-5 md:top-10 md:left-10">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.9 },
            }}
            className="text-2xl md:text-5xl lg:text-[4rem] mb-[1rem] md:mb-[2rem] lg:mb-[3rem] font-bold uppercase lg:w-[90%] md:w-[70%]"
          >
            Ready to start a project ?
          </motion.h2>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 1.3 },
            }}
          >
            <Button className="flex items-center justify-center text-[#075B8D] bg-[#fff] font-medium w-max md:py-2 md:px-4">
              <span className="mr-2 lg:text-2xl font-semibold text-[80%] md:text-base">
                Start Now
              </span>
              <FiArrowUpRight size={20} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
