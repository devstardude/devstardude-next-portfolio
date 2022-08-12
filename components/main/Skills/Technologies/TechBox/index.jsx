import { motion } from "framer-motion";
import React from "react";
import styles from "./style.module.css";

const boxItem = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 30 },
};

const TechBox = (props) => {
  return (
    <motion.div variants={boxItem} >
      <div className={`${styles.TechboxIcon}`}>{props.icon}</div>
      <p className={`${styles.TechboxTitle} Font-exp DarkBlue`}>{props.techTitle}</p>
      <p className={styles.Techboxdesc}>{props.desc}</p>
    </motion.div>
  );
};

export default TechBox;
