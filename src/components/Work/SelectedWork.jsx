const SelectedWork = ({ title, year, className }) => {
  return (
    <div>
      <div
        className={`text-[#1d1d1d] flex justify-between p-8 rounded-[2rem]  ${className}`}
      >
        <h3 className="text-[3rem] lg:text-[3.25rem] font-semibold uppercase w-[60%] break-all leading-[3rem]">
          {title}
        </h3>
        <span className="text-[1.5rem] lg:text-[2.5rem] font-semibold text-right mt-[10rem] w-[40%] pr-8  ">
          {year}
        </span>
      </div>
    </div>
  );
};

export default SelectedWork;
