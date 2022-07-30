import { motion } from "framer-motion";
import React from "react";
import Man from "../../../assets/man.png";
import Vamp from "../../../assets/vampire.png";
import Image from "next/image";
import { GiMoonBats, GiSundial } from "react-icons/gi";
import { RiSunFill } from "react-icons/ri";
import { useAppContext } from "../../../context/AppContext";
import { BiChevronsDown } from "react-icons/bi";

const Heading = (props) => {
  const mycontext = useAppContext();
  const { theme } = mycontext;
  return (
    <div className="Font-exp not-prose h-[80vh] flex flex-col justify-center">
      <p className="pl-2 text-[30px]">
        Hello. I'm <span className="DarkRed">Arun</span>.
      </p>
      <p className="font-bold text-[80px]">
        Developer
        <span className="DarkRed">&nbsp;/&nbsp;</span>
        Programmer
      </p>
      <div className="flex pointer-events-none justify-around">
        <div>
          <iframe src="https://embed.lottiefiles.com/animation/98561"></iframe>
        </div>
        {theme === "light" ? (
          <Image
            src={Man}
            alt="Picture of the author"
            width={170}
            height={170}
          />
        ) : (
          <Image
            src={Vamp}
            alt="Picture of the author"
            width={170}
            height={170}
          />
        )}
        <div>
          <iframe src="https://embed.lottiefiles.com/animation/61918"></iframe>
        </div>
      </div>

      <div className="Center pt-4">
        {theme === "light" ? (
          <div className="Center">
            <h2>Building features in the Day Light</h2> &nbsp;&nbsp;
            <RiSunFill size={40} />
          </div>
        ) : (
          <div className="Center">
            <h2>Fighting Bugs in the Dark Night</h2> &nbsp;&nbsp;
            <GiMoonBats size={38} />
          </div>
        )}
      </div>
      <div className="flex justify-center pt-5">
        <motion.div
          animate={{ y: 5 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <BiChevronsDown color="#ED0100" />
        </motion.div>
      </div>
    </div>
  );
};

export default Heading;
