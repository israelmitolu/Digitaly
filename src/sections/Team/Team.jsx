import Button from "../../components/Button/Button";
import { FiArrowUpRight } from "react-icons/fi";
import TeamMember1 from "../../assets/images/Team Member 1.png";
import TeamMember2 from "../../assets/images/Team Member 2.png";

const Team = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-around align-top text-[#e5e5e5] pb-[2rem] w-[90%] max-w-[1200px] mt-8 m-auto px-10 xxl:pt-[3rem]">
      <div className=" flex flex-col justify-around items-center lg:w-[30%]">
        <img
          src={TeamMember1}
          alt="John Travolta, CEO Digitaly"
          className="max-w-[18rem] h-auto  mb-3 lg:mb-6 w-[15rem]"
        />
        <p className="text-white text-xl lg:text-2xl">John Travolta</p>
        <span className="text-[#929294] text-[80%] lg:text-[100%]">
          CEO Digitaly
        </span>
      </div>
      <div className="flex flex-col justify-around items-center my-10 lg:my-0 lg:w-[30%]">
        <img
          src={TeamMember2}
          alt="Frank Staven, Art Director Digitaly"
          className="lg:max-w-[18rem] h-auto mb-3 lg:mb-6 w-[15rem]"
        />
        <p className="text-white text-xl lg:text-2xl">Frank Staven</p>
        <span className="text-[#929294] text-[80%] lg:text-[100%]">
          Art Director Digitaly
        </span>
      </div>

      <div className="flex flex-col text-center items-center lg:text-left lg:items-start lg:w-[30%] mt-6">
        <h2 className="uppercase text-[1.5rem] lg:text-[3rem] font-semibold  leading-[3rem] text-[#e5e5e5] mb-4">
          Meet Our Teams
        </h2>
        <p className="text-[#929294] font-medium lg:text-base text-[80%]">
          Our team consists of more than 80 experienced and very passionate
          people at the cutting edge of all things digital marketing. We always
          give our best for you.
        </p>
        <Button className="flex items-center w-fit mt-8 md:mb-0 text-black bg-[#e5e5e5] font-medium">
          <span className="mr-4 ">All Digitaly Team</span> <FiArrowUpRight />
        </Button>
      </div>
    </div>
  );
};

export default Team;
