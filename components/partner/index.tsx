import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { partnerUs } from "@/utils/data";
import AnimatedComponent from "../animations";

const PartnerUs = () => {
  return (
    <div className={styles.pageContain}>
      <div className={styles.colOne}>
        <AnimatedComponent animationType="slide-bottom">
          <Image
            src="/assets/partner-with-us-1.png"
            width={500}
            height={500}
            alt="image"
          />
        </AnimatedComponent>
      </div>
      <div className={styles.colTwo}>
        <h6>_OUR BENEFITS_</h6>
        <h2>Why Partner with Us</h2>
        <p>
          Partner with Thrynex and unlock the full potential of your business
          with our expert consultation:
        </p>
        {partnerUs?.map((items, index) => {
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

export default PartnerUs;
