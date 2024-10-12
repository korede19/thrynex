import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const Overview = () => {
  return (
    <div className={styles.pgContain}>
      <div className={styles.colOne}>
        <h6>_SERVICE OVERVIEW_</h6>
        <h2>Business Empowerment & Strategic Alliances</h2>
        <p>
          ThryNex excels in Business Empowerment and fostering Strategic
          Partnerships. We offer a suite of services designed to increase the
          capabilities of small and medium-sized enterprises. We aim to build
          partnership foundations that improve business networks and community
          ties, propelling companies toward sustainable growth and market
          influence. With ThryNex, gain access to a world of knowledge-sharing
          and support services that power your journey to success.
        </p>
      </div>
      <div className={styles.colTwo}>
        <Image src="/assets/empower.png" width={500} height={500} alt="image" />
      </div>
    </div>
  );
};

export default Overview;
