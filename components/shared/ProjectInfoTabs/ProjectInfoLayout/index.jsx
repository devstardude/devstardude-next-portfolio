import React from "react";
import { AiOutlineLaptop, AiOutlineGithub } from "react-icons/ai";
import styles from "./style.module.css";

export const Links = (props) => {
  return (
    <div className={styles.ScrollableDiv}>
      <div className={styles.ProjectLayoutVideoContainer}>
        <iframe
          title={props.item.name}
          className={styles.ProjectLayoutyoutube}
          src={props.item.youtubeLink}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.ProjectLayoutButtonWrapper}>
        <a
          target="_blank"
          rel="noreferrer"
          href={props.item.projectLink}
          className={styles.ProjectLayoutButton}
        >
          <AiOutlineLaptop className="mr-2" fontSize={24} />
          SEE WEBSITE
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={props.item.githubLink}
          className={styles.ProjectLayoutButton}
        >
          <AiOutlineGithub className="mr-2" fontSize={24} />
          SEE CODE
        </a>
      </div>
    </div>
  );
};
export const Features = (props) => {
  return (
    <React.Fragment>
      <div className={styles.ScrollableDiv}>
        <p className={styles.ProjectInfoTabTitle}>
          Here are the Features that this app includes.
        </p>
        <div className={styles.ProjectInfoTabdesc}>{props.item.features}</div>
      </div>
    </React.Fragment>
  );
};
export const Stack = (props) => {
  return (
    <React.Fragment>
      <div className={styles.ScrollableDiv}>
        <p className={styles.ProjectInfoTabTitle}>
          Here's the stack that is used to build this app.
        </p>
        <div className={styles.ProjectInfoTabdesc}>{props.item.stack}</div>
      </div>
    </React.Fragment>
  );
};
