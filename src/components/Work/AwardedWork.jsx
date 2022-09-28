import Label from "../Label/Label";

const AwardedWork = ({ labels, caption, title, icon, className }) => {
  return (
    <div className="mt-10">
      {/* The head */}
      <div className="flex justify-between items-center">
        <div>
          {/* Map through the Labels     */}
          {labels.map((label, index) => (
            <Label key={index}>{label}</Label>
          ))}
        </div>
        <div className="text-2xl uppercase text-[#929294] font-semibold">
          &copy; {caption}
        </div>
      </div>

      {/* The body */}
      <div
        className={`${className} h-50 w-full bg-no-repeat bg-cover bg-right mt-6 rounded-[2.5rem] p-10 text-white `}
      >
        <div className={`text-7xl uppercase font-bold w-[40%] ]`}>
          <h3 className="relative">
            {title}
            <span
              className="
            absolute ml-4 bottom-1 center "
            >
              <img src={icon} alt="" className=" w-auto h-16" />
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AwardedWork;
