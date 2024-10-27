import React from "react";
import styles from "./styles.module.css";
import { ourStrategy, ourStrategy2 } from "@/utils/data";
import AnimatedComponent from "../animations";
import Image from "next/image";

const Strategy = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerText}>
        <h6>_OUR STRATEGY_</h6>
        <h2>Main Principles</h2>
      </div>
      <div className={styles.sectionContain}>
        <div className={styles.colOne}>
          {ourStrategy?.map((item, index) => {
            return (
              <AnimatedComponent key={index} animationType="slide-bottom">
                <div
                  className={index % 2 === 0 ? styles.colCard : styles.colCard2}
                >
                  {item.icon}
                  <div className={styles.otherTexts}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              </AnimatedComponent>
            );
          })}
        </div>
        <div className={styles.colTwo}>
          <AnimatedComponent animationType="zoom-in">
            <Image
              src="/assets/tri-2.png"
              width={500}
              height={500}
              alt="img"
              className={styles.middleImg}
            />
          </AnimatedComponent>
        </div>
        <div className={styles.colThree}>
          {ourStrategy2?.map((item, index) => {
            return (
              <AnimatedComponent key={index} animationType="slide-bottom">
                <div
                  className={index % 2 === 0 ? styles.colCard : styles.colCard3}
                  key={index}
                >
                  {item.icon}
                  <div className={styles.otherTexts}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              </AnimatedComponent>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Strategy;
