const Tag = ({ imgSrc, value, className }) => {
  return (
    <div>
      <div
        className={`flex items-center justify-between bg-gradient-to-r from-blue-800 to-blue-900 py-3 px-4 rounded-[3rem] ${className} `}
      >
        <img src={imgSrc} alt="" className="w-auto h-20 " />
        <span className="text-7xl font-bold ml-10 pr-2">{value}</span>
      </div>
    </div>
  );
};

export default Tag;
