import { motion } from "framer-motion";
import React from "react";
import Heading from "./Heading";
import SocialLinks from "./SocialLinks";
import { BiChevronsDown } from "react-icons/bi";
import AboutMe from "./AboutMe";
import DarkModeSwitch from "../../shared/Navbar/DesktopNav/DarkModeSwitch";
const Masthead = (props) => {
  return (
    <div className="Font-exp ">
      <div className="flex justify-end">
        <SocialLinks />
      </div>
      <div className="block lg:hidden">
        <div className="flex h-[20px] pt-3">
          <DarkModeSwitch />
        </div>
      </div>
      <Heading />
      <div>
        <AboutMe />
      </div>
    </div>
  );
};

export default Masthead;
