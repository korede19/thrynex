import React from "react";
import styles from "./styles.module.css";
import { benefits2 } from "@/utils/data";

const OtherOffers = () => {
  return (
    <div className={styles.pageContain}>
      <div className={styles.colOne}></div>
      <div className={styles.colTwo}>
        <h2>What We Offer</h2>
        <p>
          Your satisfaction is our priority. We’re committed to delivering
          exceptional results and ensuring your peace of mind.
        </p>
        {benefits2?.map((items, index) => {
          return (
            <div key={index} className={styles.textContain}>
              <div>{items.icon}</div>
              <p>{items.text}</p>
            </div>
          );
        })}
        <p>
          Partner with ThryNex today and unlock the full potential of your
          business. We’re here to elevate your experience and drive meaningful
          results.
        </p>
      </div>
    </div>
  );
};

export default OtherOffers;
