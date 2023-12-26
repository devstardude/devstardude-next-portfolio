import { HiOutlineMail } from "react-icons/hi";
import Footer from "./Footer";
import FooterSocialLinks from "./Footer/FooterSocialLinks";

const ContactMe = (props) => {
  return (
    <div>
      <h2>ContactMe</h2>
      <div className="justify-between items-center text-center md:text-left gap-10 md:gap-0 flex flex-col md:flex-row">
        <div className="flex items-center gap-2 ">
          <HiOutlineMail className="" color="#E34134" />
          <a href="mailto:arunshekhar001@gmail.com" className="no-underline">
            arunshekhar001@gmail.com
          </a>
        </div>
        <div>
          <FooterSocialLinks />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactMe;
