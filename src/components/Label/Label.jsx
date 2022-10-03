const Label = ({ children, className }) => {
  return (
    <a
      className={`bg-transparent border border-[#e5e5e5] rounded-[3rem] py-2 px-4 mr-4 font-medium  text-[#929294] uppercase hover:cursor-pointer text-[12px] lg:text-base mb-4 lg:mb-0  ${className}`}
    >
      {children}
    </a>
  );
};

export default Label;
