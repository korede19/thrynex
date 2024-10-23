import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Loader from "../loader";
import AnimatedComponent from "../animations";

const Vision = () => {
  return (
    <div className={styles.pgContain}>
      <div className={styles.colOne}>
        <AnimatedComponent animationType="bounce">
          <Image
            src="/assets/plan.png"
            width={500}
            height={500}
            alt="image"
            priority
            className={styles.image}
          />
        </AnimatedComponent>
      </div>
      <div className={styles.colTwo}>
        <h6>_OUR VISION_</h6>
        <h2>Defining Future Success</h2>
        <p>
          ThryNex is committed to being at the forefront of digital strategy and
          business consulting. Our global vision is to provide bespoke digital
          solutions and premium services that empower organizations to achieve
          sustainable growth, drive innovation, and gain a competitive
          advantage. We believe in transforming potential into success by
          aligning our strategic digital implementation with your long-term
          organizational objectives.
        </p>
        <div className={styles.loaderContain}>
          <div className={styles.textContain}>
            <p>DIGITAL STRATEGY</p>
            <Loader max={90} speed={3000} />
          </div>
          <div className={styles.textContain}>
            <p>PARTNERSHIP AND EMPOWERMENT</p>
            <Loader max={100} speed={3000} />
          </div>
          <div className={styles.textContain}>
            <p>CONSULTATION</p>
            <Loader max={95} speed={3000} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
