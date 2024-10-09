import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const Navigate = () => {
  return (
    <div className={styles.pgContain}>
      <div className={styles.colOne}>
        <h6>_CONSULTATION EXPERTISE_</h6>
        <h2>Thrynex: Navigating Business Excellence</h2>
        <p>
          Thrynex’s business consultation services are crafted to enhance
          operational efficiency and strategic clarity. Our expertise supports
          your company’s journey towards sustained growth and a solidified
          market position, ensuring that our collaboration advances your goals
          with precision and foresight.
        </p>
      </div>
      <div className={styles.colTwo}>
        <Image
          src="/assets/business.png"
          width={500}
          height={500}
          alt="image"
        />
      </div>
    </div>
  );
};

export default Navigate;
