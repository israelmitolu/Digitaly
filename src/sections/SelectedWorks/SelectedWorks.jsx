import SelectedWork from "../../components/Work/SelectedWork";
import WorksBanner from "../../assets/images/Selected Works Card Bg.png";

const SelectedWorks = () => {
  return (
    <section className="flex text-[#e5e5e5] pb-[2rem] w-[90%] max-w-[1200px] mt-16 m-auto px-10 xxl:pt-[3rem]">
      <div className="left w-[70%] items-center pr-16">
        <img src={WorksBanner} alt="" />
        <div className="flex justify-around items-center mt-10">
          <SelectedWork
            title="Beefness"
            year="2022"
            className="bg-red-600 w-[20rem]"
          />
          <SelectedWork
            title="Bookly"
            year="2022"
            className="bg-yellow-500 w-[20rem]"
          />
        </div>
      </div>

      <div className="right w-[30%] flex flex-col items-center">
        <div>
          <h2 className="uppercase text-[1.5rem] lg:text-[3rem] font-semibold w-full lg:w-[30%] leading-[3rem] mb-4">
            Selected Works
          </h2>
          <p className="text-[#929294]">
            Let's get a deeper look at the challenges we overcome daily to
            create success stories for brands.
          </p>
        </div>
        <SelectedWork
          title={
            <span className="text-[4.5rem] lg:text-[6rem] truncate">
              Positive
            </span>
          }
          year="2021"
          className="-rotate-90 bg-[#ea8113] mt-[10rem] w-[35rem] "
        />
      </div>
    </section>
  );
};

export default SelectedWorks;
