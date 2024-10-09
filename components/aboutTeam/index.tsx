import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const AboutTeam = () => {
  return (
    <div className={styles.pgContain}>
      <div className={styles.colOne}>
        <Image
          src="/assets/Team-section.png"
          width={500}
          height={500}
          alt="image"
        />
      </div>
      <div className={styles.colTwo}>
        <div className={styles.texts}>
          <h6>_ABOUT TEAM_</h6>
          <h2>We Have Super Skilled Professionals</h2>
          <p>
            We’re not just consultants, we’re your tech partners, ready to
            co-pilot your journey to digital dominance. So, buckle up, grab your
            vision, and let’s rewrite the rules of the game, together.
          </p>
        </div>
        <div className={styles.count}>
          <div className={styles.countNumb}>
            <h2>15</h2>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <div className={styles.countNumb}>
            <h2>17</h2>
            <p>MASTER CERTIFICATION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
