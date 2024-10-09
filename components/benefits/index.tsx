import React from "react";
import styles from "./styles.module.css";
import { benefits } from "@/utils/data";

const Benefits = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.colOne}></div>
      <div className={styles.colTwo}>
        <h6>_OUR BENEFITS_</h6>
        <h2>Why ThryNex is Your Ideal Choice?</h2>
        <p>
          Our Integrated Business Digital Solutions stand at the vertex of
          economics and technology that empower and evolve your organizational
          processes. Here’s what sets us apart:
        </p>
        {benefits?.map((item, index) => {
          return (
            <div className={styles.listText} key={index}>
              <div className={styles.iconBox}>{item.icon}</div>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;
