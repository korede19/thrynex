import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const OtherHeros = ({ title, image }: { title: string; image: string }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={styles.heroContain}
    >
      <h1>{title}</h1>
      <p>
        <Link href="/">Home</Link> / {title}
      </p>
    </div>
  );
};

export default OtherHeros;
