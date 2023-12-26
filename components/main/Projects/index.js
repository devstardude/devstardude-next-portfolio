import styles from "./style.module.css";
import Tag from "./Tag";
import { useEffect, useState } from "react";
import ProjectList from "./ProjectList";
import ProjectItem from "./ProjectItem";

const Projects = (props) => {
  const [filters, setFilters] = useState([]);
  const [list, setList] = useState(ProjectList);
  const addFilterHandler = (tag) => {
    setFilters((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((value) => value !== tag);
      } else {
        return [...prev, tag];
      }
    });
  };
  useEffect(() => {
    if (filters.length === 0) {
      setList(ProjectList);
    } else {
      setList([]);
      let filtered = [];
      filters.forEach((filter) => {
        ProjectList.forEach((item) => {
          if (item.tech.includes(filter)) {
            filtered.push(item);
          }
        });
      });
      filtered = filtered.filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.name === value.name)
      );
      setList(filtered);
    }
  }, [filters]);
  return (
    <div className="mb-2">
      <h2>Projects</h2>
      <p>
        These are some other Projects I made while Learning.{" "}
        <span className="DarkBlue font-semibold">
          (Click on project to know more)
        </span>
      </p>
      <div className={`${styles.ProjectBox} bg-slate-200 dark:bg-slate-800`}>
        <p className="flex text-lg items-center">
          You can select tags to filter the stack 🏷️
        </p>
        <div className="flex flex-wrap gap-3 md:gap-6 p-3 md:p-5 bg-slate-50 dark:bg-gray-900 dark:border-gray-900 rounded-lg">
          <span className=" underline underline-offset-[10px] font-semibold">
            Tags:
          </span>
          {availableTags.map((tag) => (
            <Tag label={tag} onClick={() => addFilterHandler(tag)} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-[2rem] gap-10">
          {list.map((i, ind) => (
            <ProjectItem key={ind} item={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
const availableTags = [
  "Next.js",
  "TypeScript",
  "MERN",
  "React",
  "Node",
  "MongoDB",
  "Blockchain",
  "Firebase",
  "Redux",
];

export default Projects;
