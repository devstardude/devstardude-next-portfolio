import { motion } from "framer-motion";
import React from "react";
import Man from "../../../assets/man.png";
import Vamp from "../../../assets/vampire.png";
import Image from "next/image";
import { GiMoonBats, GiSundial } from "react-icons/gi";
import { RiSunFill } from "react-icons/ri";
import { useAppContext } from "../../../context/AppContext";
import { BiChevronsDown } from "react-icons/bi";
import Lottie from "lottie-react";
import lottieOne from "../../../assets/lottieOne.json";
import lottieTwo from "../../../assets/lottieTwo.json";
import lottieOne2 from "../../../assets/lottieOne-2.json";

import styles from "./style.module.css";
import { style } from "@mui/system";
const Heading = (props) => {
  const mycontext = useAppContext();
  const { theme } = mycontext;

  return (
    <div className={`${styles.MainContainer} Font-exp not-prose`}>
      <p className={styles.IntroTextOne}>
        Hello. I'm <span className="DarkRed">Arun</span>.
      </p>
      <p className={styles.IntroTextTwo}>
        Developer
        <span className="DarkRed">&nbsp;/&nbsp;</span>
        Programmer
      </p>
      <div className={styles.LottieImageContainer}>
        <div className={`${styles.LottieContainer} mt-3 md:mt-0`}>
          <Lottie animationData={lottieOne2} loop={true} />
        </div>
        <div className={styles.ImageContainer}>
          {theme === "light" ? (
            <Image src={Man} alt="man" width={170} height={170} />
          ) : (
            <Image src={Vamp} alt="Vamp" width={170} height={170} />
          )}
        </div>
        <div className={styles.LottieContainer}>
          <Lottie animationData={lottieTwo} loop={true} />
        </div>
      </div>

      <div className="Center pt-14 md:pt-4 text-[15px] sm:text-[18px] md:text-[24px]">
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
