import React from "react";
import styles from "./styles.module.css";
import { commitment } from "@/utils/data";

const OurCommitment = () => {
  return (
    <div className={styles.pgContain}>
      <div className={styles.colOne}></div>
      <div className={styles.colTwo}>
        <div className={styles.texts}>
          <h6>_OUR COMMITMENT_</h6>
          <h2>Unwavering Dedication to Your Success</h2>
          <p>
            At the core of our services lies a steadfast commitment – the fusion
            of economic insight and advanced technology.
          </p>
        </div>
        <div className={styles.listings}>
          {commitment?.map((items, index) => {
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

export default OurCommitment;
