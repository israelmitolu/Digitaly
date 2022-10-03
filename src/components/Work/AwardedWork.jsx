import Label from "../Label/Label";

const AwardedWork = ({ labels, caption, title, icon, className }) => {
  return (
    <div className="mt-5 lg:mt-10">
      {/* The head */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-center">
        <div className="flex flex-wrap justify-start">
          {/* Map through the Labels     */}
          {labels.map((label, index) => (
            <Label key={index}>
              <span className="text-[90%] font-lato font-semibold">{label}</span>
            </Label>
          ))}
        </div>
        <div className="text:lg lg:text-2xl hidden lg:flex uppercase text-[#929294] font-semibold">
          &copy; {caption}
        </div>
      </div>

      {/* The body */}
      <div
        className={`${className} h-50 w-full bg-no-repeat bg-cover bg-right mt-2 lg:mt-6 rounded-[1.5rem] md:rounded-[2.5rem] px-5 py-10 lg:p-10 text-white `}
      >
        <div className="text-3xl text-center md:text-left lg:text-7xl uppercase font-bold w-[100%] lg:w-[40%]">
          <h3 className="relative">
            {title}
            <span
              className="
            absolute ml-4 bottom-1 center"
            >
              <img src={icon} alt="" className="w-auto h-8 lg:h-16 hidden md:flex" />
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AwardedWork;
