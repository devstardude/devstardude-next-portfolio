import styles from "./style.module.css";
import { FaRegKiss } from "react-icons/fa";
import Tag from "./Tag";
import { useState } from "react";
const Projects = (props) => {
  const [filters, setFilters] = useState([]);
  const addFilterHandler = (tag) => {
    setFilters((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((value) => value !== tag);
      } else {
        return [...prev, tag];
      }
    });
  };
  return (
    <div>
      <h2>Projects</h2>
      <p>
        These are some other Projects I made while Learning.{" "}
        <span className="DarkBlue font-semibold">
          (Click on project to know more)
        </span>
      </p>
      <div className={`${styles.ProjectBox}`}>
        <p className="flex text-lg items-center">
          You can select tags to filter the stack 🏷️
        </p>
        <div className="flex flex-wrap gap-3 md:gap-6">
          {availableTags.map((tag) => (
            <Tag label={tag} onClick={() => addFilterHandler(tag)} />
          ))}
        </div>
      </div>
    </div>
  );
};
const availableTags = [
  "React",
  "Node",
  "MongoDB",
  "Blockchain",
  "Firebase",
  "Redux",
];

export default Projects;
