import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const AboutSingle = ({
  title,
  icon,
  link,
  index,
}: {
  title: string;
  icon: React.JSX.Element;
  link: string;
  index: number;
}) => {
  return (
    <Link href={link} className={styles.link}>
      <div className={index % 2 === 0 ? styles.even : styles.odd}>
        <h2 className={styles.headText}>{title}</h2>
        {icon}
      </div>
    </Link>
  );
};

export default AboutSingle;
