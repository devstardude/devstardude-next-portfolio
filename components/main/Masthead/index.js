import { motion } from "framer-motion";
import React from "react";
import Heading from "./Heading";
import SocialLinks from "./SocialLinks";
import {BiChevronsDown} from "react-icons/bi";
const Masthead = (props) => {
  return (
    <React.Fragment>
      <div className="flex justify-end">
        <SocialLinks />
      </div>
      <Heading />
     
    </React.Fragment>
  );
};

export default Masthead;
