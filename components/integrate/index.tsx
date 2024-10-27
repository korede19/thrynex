import React from "react";
import styles from "./styles.module.css";
import Loader from "../loader";
import Image from "next/image";
import AnimatedComponent from "../animations";

const Integrate = () => {
  return (
    <div className={styles.pgContain}>
      <div className={styles.colOne}>
        <div className={styles.texts}>
          <h6>_OUR STRATEGY_</h6>
          <h2>Symphonic Integration</h2>
          <p>
            Our team strategically integrates technology and insights into
            business models to drive innovative solutions and sustainable
            growth.
          </p>
        </div>
        <div className={styles.loaderContain}>
          <div className={styles.textContain}>
            <p>TECHNOLOGICAL INTEGRATIONS</p>
            <Loader max={89} speed={3000} />
          </div>
          <div className={styles.textContain}>
            <p>GROWTH STRATEGIES</p>
            <Loader max={90} speed={3000} />
          </div>
          <div className={styles.textContain}>
            <p>CLIENT PARTNERSHIP</p>
            <Loader max={100} speed={3000} />
          </div>
          <div className={styles.textContain}>
            <p>EFFICIENCY ENHANCEMENT</p>
            <Loader max={85} speed={3000} />
          </div>
          <div className={styles.textContain}>
            <p>SECURITY MANAGEMENT</p>
            <Loader max={85} speed={3000} />
          </div>
        </div>
      </div>
      <div className={styles.colTwo}>
        <AnimatedComponent animationType="bounce">
          <Image
            src="/assets/layers.png"
            width={600}
            height={500}
            alt="img"
            className={styles.imgConst}
          />
        </AnimatedComponent>
      </div>
    </div>
  );
};

export default Integrate;
