import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const Expertise = () => {
  return (
    <div className={styles.pgContain}>
      <div className={styles.colOne}>
        <h6>_CONSULTATION EXPERTISE_</h6>
        <h2>Empowering Digital Advancement</h2>
        <p>
          We offer bespoke business digital solutions that streamline and
          enhance your operations. Our approach to digital transformation
          harnesses the latest digital technologies to refine your business
          models and enrich customer experiences. We’re committed to supporting
          your growth and innovation, providing a robust commerce platform for
          your success.
        </p>
      </div>
      <div className={styles.colTwo}>
        <Image src="/assets/EXPERTS.png" width={500} height={500} alt="image" />
      </div>
    </div>
  );
};

export default Expertise;
