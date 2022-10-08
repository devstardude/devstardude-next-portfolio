import React from "react";
import TechBox from "./TechBox";
import { SiReact, SiHiveBlockchain } from "react-icons/si";
import { GoDatabase, GoDeviceDesktop } from "react-icons/go";
import {
  AiFillDatabase,
  AiFillCloud,
  AiOutlineCode,
  AiOutlineProject,
} from "react-icons/ai";
import { FaGitAlt } from "react-icons/fa";

import styles from "./style.module.css";
import { motion } from "framer-motion";

const boxList = {
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

const Technologies = (props) => {
  return (
    <section className="not-prose mt-6 p-6 dark:bg-slate-800 bg-slate-200  rounded-lg">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <div>
          <motion.li
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={boxList}
            className={styles.TechTechboxGrid}
          >
            {techs.map((tech) => (
              <TechBox
                key={tech.title}
                techTitle={tech.title}
                desc={tech.desc}
                icon={tech.icon}
              />
            ))}
          </motion.li>
        </div>
      </motion.div>
    </section>
  );
};
const techs = [
  {
    title: "Front-End",
    desc: "React, Redux, Next.js, TypeScript, Jest Testing",
    icon: <SiReact fontSize={35} />,
  },
  {
    title: "Back-End",
    desc: "Node, Express, REST, GraphQL, Go API",
    icon: <AiFillDatabase fontSize={35} />,
  },
  {
    title: "Database",
    desc: "MongoDB, Firestore, DynamoDB ",
    icon: <GoDatabase fontSize={35} />,
  },
  {
    title: "UI/UX",
    desc: "Tailwind CSS, Material UI, Framer motion",
    icon: <GoDeviceDesktop fontSize={35} />,
  },
  {
    title: "Cloud Services",
    desc: "Firebase, AWS",
    icon: <AiFillCloud fontSize={35} />,
  },
  {
    title: "Version Tracking",
    desc: "Git, GitHub, GitLab",
    icon: <FaGitAlt fontSize={35} />,
  },
  {
    title: "Languages",
    desc: "Python, JavaScript, C++, Go, TypeScript, Solidity",
    icon: <AiOutlineCode fontSize={35} />,
  },
  {
    title: "Misc",
    desc: "Blockchain, NFTs applications, Fully Functional Bot in Discord.js",
    icon: <SiHiveBlockchain fontSize={35} />,
  },
  {
    title: "Project Management",
    desc: "Notion, Asana, Trello, Slack",
    icon: <AiOutlineProject fontSize={35} />,
  },
];

export default Technologies;
