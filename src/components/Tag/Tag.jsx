const Tag = ({ imgSrc, value }) => {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-blue-800 to-blue-900 py-3 px-4 rounded-[3rem] w-[30rem]">
      <img src={imgSrc} alt="" className="w-auto h-20 " />
      <span className="text-7xl font-bold pr-2">{value}</span>
    </div>
  );
};

export default Tag;
