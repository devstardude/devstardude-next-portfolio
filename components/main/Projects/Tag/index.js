import { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import styles from "./style.module.css";
const Tag = (props) => {
  const [active, setActive] = useState(false);
  const setActiveHandler = () => {
    setActive((prev) => !prev);
  };
  return (
    <div className="flex" onClick={props.onClick}>
      <div
        onClick={setActiveHandler}
        className={`${styles.TagBox} ${
          active
            ? styles.TagBoxActive
            : "border-gray-800 dark:border-gray-50 bg-red-300/10"
        } Center`}
      >
        <span className="text-[16px] md:text-[20px]">{props.label}</span>
        <span>
          <BsCheck2Circle
            className={
              active ? "text-green-500" : "text-gray-800 dark:text-gray-50"
            }
          />
        </span>
      </div>
    </div>
  );
};

export default Tag;
