import React from "react";
import styles from "./styles.module.css";
import { cards } from "@/utils/data";
import OffersSingle from "../offersSingle";

const Offers = () => {
  return (
    <div className={styles.bgContain}>
      <div className={styles.pageContain}>
        <div className={styles.pageText}>
          <h6>_WHAT WE OFFER_</h6>
          <h2>Integrated Business Digital Solutions</h2>
          <p>
            We deliver integrated business technologies and strategic insights
            for harmonized digital transformation, fostering growth and
            innovation.
          </p>
        </div>
        <div className={styles.cardsGrid}>
          {cards?.map((items, index) => {
            return (
              <OffersSingle
                key={index}
                icon={items.icon}
                title={items.title}
                text={items.text}
                background={items.background}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Offers;
