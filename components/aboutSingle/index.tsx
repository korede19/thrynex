import React from "react";
import styles from "./styles.module.css";

const AboutSingle = ({
  title,
  icon,
  index,
}: {
  title: string;
  icon: React.JSX.Element;
  index: number;
}) => {
  return (
    <div className={index % 2 === 0 ? styles.even : styles.odd}>
      <h2 className={styles.headText}>{title}</h2>
      {icon}
    </div>
  );
};

export default AboutSingle;
