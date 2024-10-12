import React from "react";
import styles from "./styles.module.css";

const ProfileExp = ({
  titleOne,
  titleTwo,
  titleThree,
  textOne,
  textTwo,
  textThree,
}: {
  titleOne: string;
  titleTwo: string;
  titleThree: string;
  textOne: string;
  textTwo: string;
  textThree: string;
}) => {
  return (
    <div className={styles.pgContain}>
      <div>
        <h3>{titleOne}</h3>
        <p>{textOne}</p>
      </div>
      <div>
        <h3>{titleTwo}</h3>
        <p>{textTwo}</p>
      </div>
      <div>
        <h3>{titleThree}</h3>
        <p>{textThree}</p>
      </div>
    </div>
  );
};

export default ProfileExp;
