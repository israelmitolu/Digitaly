import { FiArrowUpRight } from "react-icons/fi";

const FooterLink = ({ text, handle, className }) => {
  return (
    <div
      className={`flex text-[#929294] justify-between items-center border-b border-gray-600 py-3 font-semibold ${className}`}
    >
      <span className="uppercase">{text}</span>
      <div className="flex items-center ">
        <p className="mr-2 font-normal lg:text-base text-[80%]">{handle}</p>
        <FiArrowUpRight size={20} />
      </div>
    </div>
  );
};

export default FooterLink;
