import React from "react";
import styles from "./styles.module.css";
import Mission from "../mission";
import AnimatedComponent from "../animations";
import CounterTwo from "../counter2";
import Link from "next/link";

const OurBusiness = ({
  titleOne,
  titleTwo,
  text,
}: {
  titleOne: string;
  titleTwo: string;
  text: string;
}) => {
  return (
    <div className={styles.pgContain}>
      <div className={styles.textContain}>
        <h6>_WHAT WE OFFER_</h6>
        <h2>Our Business Philosophy</h2>
        <p>
          We are specialists in both economics and information technologies and
          we apply our full range of talent to creating the perfect solution for
          each client’s needs.
        </p>
      </div>
      <div className={styles.otherComponents}>
        <Mission />
        <CounterTwo />
      </div>
      <AnimatedComponent animationType="slide-bottom">
        <div className={styles.ourPossibilities}>
          <h6>{titleOne}</h6>
          <h2>{titleTwo}</h2>
          <p>{text}</p>

          <Link
            href="https://calendly.com/thrynex/consultation?month=2024-10"
            target="_blank"
          >
            <button className={styles.BtnContain}>Book A Call Now!</button>
          </Link>
        </div>
      </AnimatedComponent>
    </div>
  );
};

export default OurBusiness;
