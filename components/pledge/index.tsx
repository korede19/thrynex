import React from "react";
import styles from "./styles.module.css";
import { ourPledge } from "@/utils/data";

const Pledge = () => {
  return (
    <div className={styles.pgContain}>
      <div className={styles.colOne}></div>
      <div className={styles.colTwo}>
        <div className={styles.texts}>
          <h6>_OUR PLEDGE_</h6>
          <h2>Empowering Strategic Growth</h2>
          <p>
            In every partnership, our pledge is to empower your business with
            strategic consulting services that foster enduring success. Trust in
            us for:
          </p>
        </div>
        <div className={styles.listings}>
          {ourPledge?.map((items, index) => {
            return (
              <div key={index} className={styles.contentLists}>
                <div>{items.icon}</div>
                <p>{items.text}</p>
              </div>
            );
          })}
        </div>
        <p>
          With us, your company gains a steadfast ally for strategic evolution.
        </p>
      </div>
    </div>
  );
};

export default Pledge;
