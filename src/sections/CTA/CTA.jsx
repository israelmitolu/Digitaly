import Button from "../../components/Button/Button";
import { FiArrowUpRight } from "react-icons/fi";
import CtaBanner from "../../assets/images/Start Project Bg.png";

const CTA = () => {
  return (
    <>
      <section className="text-[#fff] pb-[2rem] h-[80vh] w-[90%] max-w-[1200px] m-auto px-10 xxl:pt-[3rem]">
        <div className="relative text-left">
          <img src={CtaBanner} alt="" className="max-w-full h-auto" />
          <h2 className="absolute top-[5rem] left-14 text-8xl font-bold uppercase w-[70%]">
            Ready to start a project ?
          </h2>
          <Button className="flex items-center justify-center text-[#075B8D] bg-[#fff] font-medium  absolute top-[20rem] w-max left-14 py-4 px-8">
            <span className="mr-2 text-2xl font-semibold">Start Now</span>
            <FiArrowUpRight size={20} />
          </Button>
        </div>
      </section>
    </>
  );
};

export default CTA;
