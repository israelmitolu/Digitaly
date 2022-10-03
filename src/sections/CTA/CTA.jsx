import Button from "../../components/Button/Button";
import { FiArrowUpRight } from "react-icons/fi";
import CtaBanner from "../../assets/images/Start Project Bg.png";

const CTA = () => {
  return (
    <>
      <section className="text-[#fff] pb-[2rem] w-[90%] max-w-[1200px] m-auto px-10 mt-[3rem]">
        <div className="relative">
          <img
            src={CtaBanner}
            alt=""
            className="max-w-full h-[10rem] md:h-auto object-cover rounded-2xl md:rounded-none"
          />
          <h2 className="absolute top-4 left-4 md:top-20 md:left-14 text-2xl md:text-5xl lg:text-7xl font-bold uppercase w-[90%] md:w-[70%]">
            Ready to start a project ?
          </h2>
          <Button className="flex items-center justify-center text-[#075B8D] bg-[#fff] font-medium absolute top-24 md:top-[20rem] left-4 md:left-14  w-max md:py-4 md:px-8">
            <span className="mr-2 md:text-2xl font-semibold text-[80%] md:text-[100%]">
              Start Now
            </span>
            <FiArrowUpRight size={20} />
          </Button>
        </div>
      </section>
    </>
  );
};

export default CTA;
