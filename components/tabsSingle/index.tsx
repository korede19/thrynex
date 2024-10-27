import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import AnimatedComponent from "../animations";

const TabSingle = ({
  image,
  title,
  text,
  text2,
  index,
}: {
  image: string;
  title: string;
  text: string;
  text2: string;
  index: number;
}) => {
  return (
    <div className={index % 2 === 0 ? styles.even : styles.odd}>
      <div className={styles.colOne}>
        <AnimatedComponent animationType="zoom-in">
          <Image src={image} width={500} height={500} alt="image" />
        </AnimatedComponent>
      </div>
      <div className={styles.colTwo}>
        <h2>{title}</h2>
        <p>{text}</p>
        <br />
        <p>{text2}</p>
      </div>
    </div>
  );
};

export default TabSingle;
