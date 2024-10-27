import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { someBenefits } from "@/utils/data";
import AnimatedComponent from "../animations";

const OtherBenefits = () => {
  return (
    <div className={styles.pageContain}>
      <div className={styles.colOne}>
        <AnimatedComponent animationType="slide-bottom">
          <Image
            src="/assets/Empower-Us.png"
            width={500}
            height={500}
            alt="image"
          />
        </AnimatedComponent>
      </div>
      <div className={styles.colTwo}>
        <h6>_OUR BENEFITS_</h6>
        <h2>Why Choose ThryNex for Strategic Empowerment Partnerships</h2>
        <p>
          Our Business Empowerment and Partnership services opens the door to a
          host of strategic benefits tailored for your enterprise. Our
          specialized approach creates a synergistic space where businesses
          excel through knowledge sharing and community involvement. Experience
          the power of:
        </p>
        {someBenefits?.map((items, index) => {
          return (
            <div className={styles.items} key={index}>
              {items.icon}
              <p>{items.text}</p>
            </div>
          );
        })}
        <p>
          Let’s unlock your business potential together. We provide the tools,
          resources, and support you need to thrive.
        </p>
      </div>
    </div>
  );
};

export default OtherBenefits;
