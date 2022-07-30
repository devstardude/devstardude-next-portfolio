import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import {
  FaBars,
  FaUserTie,
  FaLaptopCode,
  FaUserSecret,
  FaTrophy,
  FaPhoneAlt,
} from "react-icons/fa";
//import'./style.css';
const routes = [
  {
    path: "#section-1",
    name: "About",
    icon: <FaUserTie />,
  },
  {
    path: "#section-2",
    name: "Projects",
    icon: <FaLaptopCode />,
  },
  {
    path: "#section-3",
    name: "Skills",
    icon: <FaUserSecret />,
  },
  {
    path: "#section-4",
    name: "Achievments",
    icon: <FaTrophy />,
  },
  {
    path: "#section-5",
    name: "Contact me",
    icon: <FaPhoneAlt />,
  },
];
const Navbar = (props) => {
  return (
    <div>
      <DesktopNav />
      <div className="block lg:hidden">
        <MobileNav links={routes} />
      </div>
    </div>
  );
};

export default Navbar;
