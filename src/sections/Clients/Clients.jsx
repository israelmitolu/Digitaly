import Stars from "../../assets/images/Client Star.png";
import Tag from "../../components/Tag/Tag";
import { FaApple, FaAmazon, FaTiktok, FaMicrosoft } from "react-icons/fa";

const Clients = () => {
  return (
    <div className="text-[#e5e5e5] pb-[2rem] lg:w-[90%] max-w-[1200px] m-auto px-6 md:px-10 xxl:pt-[3rem]">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-2 lg:gap-10 mt-[4rem]">
        <h2 className="uppercase text-[1.5rem] lg:text-[3rem] font-semibold lg:w-[30%] leading-[3rem]">
          Happy Client
        </h2>
        <p className="text-[#929294] font-medium lg:text-base text-[80%] lg:w-[40%] my-6 md:my-0 text-left">
          We are encouraged and inspired when our clients share their project
          results with us, we always have noted outstanding results of our work.
        </p>
        <Tag imgSrc={Stars} value="620" className='hidden lg:flex' />
      </div>

      {/* Client logos */}
      <div className="flex flex-wrap justify-between gap-4 md:gap-0 lg:flex-nowrap items-center md:justify-between py-[1rem] border-b border-t border-gray-600 mt-3 md:mt-7 lg:mt-14">
        <FaApple className="text-[2rem] md:text-[4rem] my-6" />
        <div className="bg-[#353535] hidden md:block h-[.5rem] w-[.5rem] lg:h-[1rem] lg:w-[1rem] rounded-[50%]"></div>
        <FaAmazon className="text-[2rem] md:text-[4rem]" />
        <div className="bg-[#353535] hidden md:block h-[.5rem] w-[.5rem] lg:h-[1rem] lg:w-[1rem] rounded-[50%]"></div>
        <FaTiktok className="text-[2rem] md:text-[4rem]" />
        <div className="bg-[#353535] hidden md:block h-[.5rem] w-[.5rem] lg:h-[1rem] lg:w-[1rem] rounded-[50%]"></div>
        <FaMicrosoft className="text-[2rem] md:text-[4rem]" />
        <div className="bg-[#353535] hidden md:block h-[.5rem] w-[.5rem] lg:h-[1rem] lg:w-[1rem] rounded-[50%]"></div>
      </div>
    </div>
  );
};

export default Clients;
