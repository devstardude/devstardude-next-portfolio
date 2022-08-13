import { motion } from "framer-motion";
import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";
//import'./style.css';

const SocialLinks = (props) => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 },
  };

  return (
    <React.Fragment>
      <div className="">
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={list}
          className="flex w-[220px] justify-between"
        >
          <motion.a
            href="https://github.com/devstardude"
            target="_blank"
            variants={item}
          >
            <AiFillGithub
              size="30px"
              
              className="transform transition duration-500 hover:scale-[1.3] cursor-pointer"
            />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/i_m_a.r.u.n/"
            target="_blank"
            variants={item}
          >
            <AiFillInstagram
              size="30px"
              
              className="transform transition duration-500 hover:scale-[1.3] cursor-pointer"
            />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/arun-shekhar"
            target="_blank"
            variants={item}
          >
            <AiFillLinkedin
              size="30px"
              
              className="transform transition duration-500 hover:scale-[1.3] cursor-pointer"
            />
          </motion.a>
          <motion.a
            href="https://www.youtube.com/channel/UCEL_3xlrevncI0OWEzaIY3Q"
            target="_blank"
            variants={item}
          >
            <AiFillYoutube
              size="30px"
              
              className="transform transition duration-500 hover:scale-[1.3] cursor-pointer"
            />
          </motion.a>
        </motion.ul>
      </div>
    </React.Fragment>
  );
};

export default SocialLinks;
