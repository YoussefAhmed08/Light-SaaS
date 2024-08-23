import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex items-center justify-between flex-col gap-3 lg:flex-row lg:px-20 py-8 bg-black">
      <div>
        <p className="text-xs lg:text-sm text-white/50 font-arial">
          © 2024 LightSass. Inc. All right reserved
        </p>
      </div>
      <ul className="flex items-center justify-center gap-8">
        <li>
          <FaInstagram className="text-white/60 text-xl" />
        </li>
        <li>
          <FaLinkedin className="text-white/60 text-xl" />
        </li>
        <li>
          <FaPinterest className="text-white/60 text-xl" />
        </li>
        <li>
          <FaXTwitter className="text-white/60 text-xl" />
        </li>
        <li>
          <FaYoutube className="text-white/60 text-xl" />
        </li>
      </ul>
    </section>
  );
};

export default Footer;
