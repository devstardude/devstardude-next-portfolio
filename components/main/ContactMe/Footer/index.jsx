import React from "react";
import { AiFillHeart } from "react-icons/ai";
import styles from "./style.module.css";

const Footer = (props) => {
  return (
    <section className={styles.FooterMainWrapper}>
      <div
        className={`${styles.FooterMainText} Center bg-slate-200 dark:bg-slate-800 gap-2 md:gap-4`}
      >
        <p>Let&apos;s build something great together </p>
        <p className="text-red-800">
          <AiFillHeart className="Heart" />
        </p>
      </div>
    </section>
  );
};

export default Footer;
