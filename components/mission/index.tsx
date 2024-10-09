import React from "react";
import styles from "./styles.module.css";
import { cards2 } from "@/utils/data";
import MissionSingle from "../missionSingle";

const Mission = () => {
  return (
    <div className={styles.pgContain}>
      {cards2?.map((items, index) => {
        return (
          <MissionSingle
            key={index}
            background={items.background}
            title={items.title}
            text={items.text}
            icon={items.icon}
          />
        );
      })}
    </div>
  );
};

export default Mission;
