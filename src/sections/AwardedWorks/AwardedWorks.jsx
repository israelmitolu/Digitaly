import TrumpTag from "../../assets/images/Trump Tag.png";
import AwardedWork from "../../components/Work/AwardedWork";
import { IoLogoSkype, IoLogoCodepen } from "react-icons/io5";

const AwardedWorks = () => {
  return (
    <div className="text-[#e5e5e5] pb-[2rem] w-[90%] max-w-[1200px] m-auto px-10 xxl:pt-[3rem]">
      <div className="flex flex-wrap md:flex-nowrap justify-around items-center mt-[4rem]">
        <h2 className="uppercase text-[1.5rem] lg:text-[3rem] font-semibold w-full lg:w-[30%] leading-[3rem]">
          Awarded Works
        </h2>
        <p className="text-[#929294] px-10 font-medium lg:text-base text-[80%]">
          We are passionate digital market, we always produce projects that both
          ourselves and our clients can be truly proud of
        </p>
        {/* This will be a bigger tag, so its size is subject to change */}
        <img src={TrumpTag} alt="" className=" w-32" />
      </div>

      {/* Awarded Work 1 */}
      <AwardedWork
        labels={["SEO", "Social Ads", "2021 Awards"]}
        caption="Classic blue"
        title="Classic Blue"
        icon={<IoLogoSkype />}
        bgImage="work-banner-1"
      />
      <AwardedWork
        labels={["CRO", "Content Marketing", "2021 Awards"]}
        caption="Orangy Wave"
        title="Orangy Wave"
        icon={<IoLogoCodepen />}
        bgImage="work-banner-2"
      />
    </div>
  );
};

export default AwardedWorks;
