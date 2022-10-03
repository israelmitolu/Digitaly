const SelectedWork = ({ title, year, className, rotate }) => {
  return (
    <div className={`text-[#1d1d1d] p-8 rounded-[2rem] w-[100%] ${className} `}>
      {/* <div className={`${rotate && "-rotate-90 flex flex-col justify-center items-center w-full h-full"}`}> */}
      <div
        className={`${
          rotate && "rotate-0 lg:-rotate-90 lg:grid lg:grid-rows-2 justify-end w-full h-fit"
        }`}
      >
        {title}
        <div className={`flex justify-end pt-8 w-full`}>
          <span className="text-[1.5rem] lg:text-[2.5rem] font-semibold text-right">
            {year}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SelectedWork;
