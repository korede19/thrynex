import React from "react";
import styles from "./styles.module.css";

const MissionSingle = ({
  icon,
  title,
  text,
  background,
}: {
  icon: React.JSX.Element;
  title: string;
  text: string;
  background: string;
}) => {
  return (
    <div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div
            className={styles.front}
            style={{
              backgroundImage: `url(${background})`,
            }}
          >
            {icon}
            <h2>{title}</h2>
          </div>
          <div className={styles.back}>
            {/* <h2>{title}</h2> */}
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSingle;
