import React from "react";
import styles from "./styles.module.css";
import { aboutThry } from "@/utils/data";
import AboutSingle from "../aboutSingle";
import Image from "next/image";
import AnimatedComponent from "../animations";

const AboutThrynex = () => {
  return (
    <div className={styles.pageContain}>
      <div className={styles.pageContainer}>
        {aboutThry?.map((item, index) => {
          return (
            <AboutSingle
              key={index}
              title={item.title}
              icon={item.icon}
              link={item.link}
              index={index}
            />
          );
        })}
      </div>
      <div className={styles.aboutContent}>
        <div className={styles.textContent}>
          <p>ABOUT THRYNEX_</p>
          <h2>We Craft Seamless Digital Strategies for Business Excellence</h2>
          <p className={styles.textWord}>
            ThryNex excels in delivering Integrated Business Digital Solutions,
            merging economic analysis and digital technologies for your
            enterprise’s growth. Our digital strategies, underpinned by
            innovation management and digital transformation, drive efficiency
            and a competitive edge.
          </p>
          <h3>Your Trusted Partner in Enterprise Digital Transformation.</h3>
        </div>
        <div className={styles.imageAll}>
          <AnimatedComponent animationType="bounce">
            <Image
              src="/assets/new-1.png"
              width={550}
              height={550}
              alt="image"
              className={styles.imgTwo}
            />
          </AnimatedComponent>
        </div>
      </div>
    </div>
  );
};

export default AboutThrynex;
