import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import AnimatedComponent from "../animations";

const OtherHeros = ({ title, image }: { title: string; image: string }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={styles.heroContain}
    >
      <AnimatedComponent animationType="slide-top">
        <h1 className={styles.titleText}>{title}</h1>
      </AnimatedComponent>
      <p>
        <Link href="/">Home</Link> / {title}
      </p>
    </div>
  );
};

export default OtherHeros;
