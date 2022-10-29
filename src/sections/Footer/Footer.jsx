import { Link } from "react-scroll";
import Logo from "../../assets/images/Logo White.png";
import FooterLink from "../../components/FooterLink/FooterLink";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AnimationContext } from "../../context/animation";

const Footer = () => {
  const { riseUpVariant2, riseUpItem } = useContext(AnimationContext);

  return (
    <div data-scroll-section>
      <footer className="pb-[4rem] lg:w-[90%] max-w-[1200px] m-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between mt-[4rem]">
          {/* Left  */}
          <motion.div
            variants={riseUpVariant2}
            initial="hidden"
            whileInView="visible"
            className="md:w-[40%]"
          >
            <motion.h2
              variants={riseUpItem}
              className="uppercase text-[1.5rem] lg:text-[3rem] font-semibold lg:w-[70%] leading-[3rem] text-[#e5e5e5]"
            >
              Keep in Touch
            </motion.h2>
            <Link to="home" className="cursor-pointer">
              <motion.img
                variants={riseUpItem}
                src={Logo}
                alt="Logo"
                className="h-[25px] my-4"
              />
            </Link>
            <motion.p
              variants={riseUpItem}
              className="text-[#929294] font-medium mb-8 lg:text-base text-[80%]"
            >
              Palau Sebira, Kepulauan Seribu Utara, Kab. Administrasi Kepulauan
              Seribu, Daerah Khusus Ibukota Jakarta
            </motion.p>
            <motion.span variants={riseUpItem}>
              <FooterLink text="Faq" />
            </motion.span>
            <motion.span variants={riseUpItem}>
              <FooterLink text="Terms & Agreements" />
            </motion.span>
          </motion.div>

          {/* Right  */}
          <motion.div
            variants={riseUpVariant2}
            initial="hidden"
            whileInView="visible"
            className="md:w-[40%] flex flex-col justify-between"
          >
            <motion.span variants={riseUpItem}>
              <FooterLink text="Email" handle="Hello@Digitaly.yeah" />
            </motion.span>
            <motion.span variants={riseUpItem}>
              <FooterLink text="Instagram" handle="@Digitaly" />
            </motion.span>
            <motion.span variants={riseUpItem}>
              <FooterLink text="Twitter" handle="@Digitaly" />
            </motion.span>
            <motion.span variants={riseUpItem}>
              <FooterLink text="Medium" handle="@Digitaly" />
            </motion.span>
            <motion.span variants={riseUpItem}>
              <FooterLink text="Telegram" handle="@Digitaly" />
            </motion.span>
            <motion.span variants={riseUpItem}>
              <FooterLink text="LinkedIn" handle="@Digitaly" />
            </motion.span>
            <motion.span variants={riseUpItem}>
              <FooterLink text="Facebook" handle="@Digitaly" />
            </motion.span>
          </motion.div>
        </div>
      </footer>
      <div className="arch w-[100%] h-4 bg-slate-200 rounded-t-xl" />
    </div>
  );
};

export default Footer;
