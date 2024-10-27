import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import AnimatedComponent from "../animations";

const Partners = () => {
  return (
    <div className={styles.pgContain}>
      <div className={styles.colOne}>
        <AnimatedComponent animationType="fade">
          <Image src="/assets/about.png" width={500} height={500} alt="image" />
        </AnimatedComponent>
      </div>
      <div className={styles.colTwo}>
        <h6>_ABOUT THRYNEX_</h6>
        <h2>We are Partners in Growth and Success</h2>
        <p>
          At ThryNex, we’re dedicated to forging the path to businesses
          incredible success. We uniquely blend creativity and innovation with
          advanced information technology to solve our clients’ problems and set
          them apart from the competition. Our commitment is to deliver
          professional Integrated Business Digital Solutions that power
          businesses forward, driving growth and enabling competitive advantage.
        </p>
        <h3>
          Premier Business
          <br /> Consultancy.
        </h3>
      </div>
    </div>
  );
};

export default Partners;
