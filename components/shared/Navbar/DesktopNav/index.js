import React, { useContext, useEffect } from "react";
import {
  FaBars,
  FaUserTie,
  FaLaptopCode,
  FaUserSecret,
  FaTrophy,
  FaPhoneAlt,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import Scrollspy from "react-scrollspy";
import { useAppContext } from "../../../context/AppContext";
import DarkModeSwitch from "./DarkModeSwitch";
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

const DesktopNav = (props) => {
  
  const mycontext = useAppContext();
  const { isOpen, setIsOpen,theme } = mycontext;
  const { children } = props;
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(()=>{

  },[])
  return (
    <>
      <div className="main-container hidden lg:block ">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "55px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar overflow-x-hidden `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Devstardude
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars cursor-pointer">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="flex w-full justify-between px-3 items-center">
            <p className="dark:text-red-600 text-blue-600">{theme} Mode</p>
            <DarkModeSwitch />
          </div>
          <section className="pt-[3rem] px-2">
            <div className="flex flex-col">
              <Scrollspy
                items={[
                  "section-1",
                  "section-2",
                  "section-3",
                  "section-4",
                  "section-5",
                ]}
                currentClassName="Red"
                offsetoffset={-500}
              >
                {routes.map((route) => (
                  <a
                    href={route.path}
                    className="flex gap-3 py-2  mb-5 px-1 rounded-md"
                  >
                    <div className="text-[30px]">{route.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.h1
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="text-[20px] whitespace-nowrap"
                        >
                          {route.name}
                        </motion.h1>
                      )}
                    </AnimatePresence>
                  </a>
                ))}
              </Scrollspy>
            </div>
          </section>
        </motion.div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default DesktopNav;
