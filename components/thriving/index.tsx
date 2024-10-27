import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { weThrive } from "@/utils/data";
import AnimatedComponent from "../animations";

const Thrive = () => {
  return (
    <div className={styles.pageContain}>
      <div className={styles.colOne}>
        <AnimatedComponent animationType="slide-bottom">
          <Image
            src="/assets/partner.png"
            width={500}
            height={500}
            alt="image"
          />
        </AnimatedComponent>
      </div>
      <div className={styles.colTwo}>
        <h6>_OUR BENEFITS_</h6>
        <h2>Build a Thriving Future with Integrated Expertise</h2>
        <p>
          Choose our advanced business solutions to unlock your digital
          potential. Our transformational expertise fuels your company’s growth:
        </p>
        {weThrive?.map((items, index) => {
          return (
            <div className={styles.items} key={index}>
              {items.icon}
              <p>{items.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Thrive;
