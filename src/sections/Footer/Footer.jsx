import Logo from "../../assets/images/Logo White.png";
import FooterLink from "../../components/FooterLink/FooterLink";

const Footer = () => {
  return (
    <>
      <footer className="pb-[4rem] w-[90%] max-w-[1200px] m-auto px-10">
        <div className="flex flex-col md:flex-row justify-between mt-[4rem]">
          {/* Left  */}
          <div className="md:w-[40%]">
            <h2 className="uppercase text-[1.5rem] lg:text-[3rem] font-semibold lg:w-[70%] leading-[3rem] text-[#e5e5e5]">
              Keep in Touch
            </h2>
            <a href="">
              <img src={Logo} alt="Logo" className="h-[25px] my-4" />
            </a>
            <p className="text-[#929294] font-medium mb-8 lg:text-base text-[80%]">
              Palau Sebira, Kepulauan Seribu Utara, Kab. Administrasi Kepulauan
              Seribu, Daerah Khusus Ibukota Jakarta
            </p>
            <FooterLink text="Faq" />
            <FooterLink text="Terms & Agreements" />
          </div>

          {/* Right  */}
          <div className="md:w-[40%] flex flex-col justify-between">
            <FooterLink text="Email" handle="Hello@Digitaly.yeah" />
            <FooterLink text="Instagram" handle="@Digitaly" />
            <FooterLink text="Twitter" handle="@Digitaly" />
            <FooterLink text="Medium" handle="@Digitaly" />
            <FooterLink text="Telegram" handle="@Digitaly" />
            <FooterLink text="LinkedIn" handle="@Digitaly" />
            <FooterLink text="Facebook" handle="@Digitaly" />
          </div>
        </div>
      </footer>
      <div className="arch w-[100%] h-4 bg-slate-200 rounded-t-xl" />
    </>
  );
};

export default Footer;
