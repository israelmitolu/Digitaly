const Tag = ({ imgSrc, value, className }) => {
  return (
    <div>
      <div
        className={`flex items-center justify-between bg-gradient-to-r from-blue-800 to-blue-900 py-1 lg:py-3 px-4 rounded-[3rem] ${className} `}
      >
        <img src={imgSrc} alt="" className="w-auto h-16" />
        <span className="text-3xl lg:text-6xl font-bold ml-5 pr-2 font-lato">
          {value}
        </span>
      </div>
    </div>
  );
};

export default Tag;
