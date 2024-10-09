import React from "react";
import styles from "./styles.module.css";

const Counter = () => {
  return (
    <div className={styles.pgContain}>
      <div className={styles.textcontain}>
        <h2>15+</h2>
        <p>YEARS OF EXPERIENCE</p>
      </div>
      <div className={styles.textcontain}>
        <h2>250+</h2>
        <p>TRUSTED CLIENTS</p>
      </div>
      <div className={styles.textcontain}>
        <h2>36+</h2>
        <p>VISITED CONFERENCES</p>
      </div>
      <div className={styles.textcontain}>
        <h2>17+</h2>
        <p>MASTER CERTIFICATION</p>
      </div>
    </div>
  );
};

export default Counter;
