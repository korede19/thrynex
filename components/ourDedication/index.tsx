import React from "react";
import styles from "./styles.module.css";
import { weDedicate } from "@/utils/data";

const OurDedication = () => {
  return (
    <div className={styles.pgContain}>
      <div className={styles.colOne}></div>
      <div className={styles.colTwo}>
        <div className={styles.texts}>
          <h6>_DEDICATED TO YOUR SUCCESS_</h6>
          <h2>Our Promise: Empowerment and Innovation at the Forefront</h2>
          <p>
            Rooted in a deep understanding of economics and tech progress, we’re
            all about fueling your climb to success.
          </p>
        </div>
        <div className={styles.listings}>
          {weDedicate?.map((items, index) => {
            return (
              <div key={index} className={styles.contentLists}>
                <div>{items.icon}</div>
                <p>{items.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurDedication;
