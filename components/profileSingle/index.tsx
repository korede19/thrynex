import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Linkedln from "@/svg/linkedln";
import Link from "next/link";

const ProfileSingle = ({
  image,
  fullName,
  position1,
  position2,
  expertise,
  email,
  responsibility,
  phone,
  link,
}: {
  image: string;
  fullName: string;
  position1: string;
  position2: string;
  expertise: string;
  email: string;
  phone: string;
  responsibility: string;
  link: string;
}) => {
  return (
    <div className={styles.pgContain}>
      <div className={styles.colOne}>
        <Image src={image} width={500} height={500} alt="image" />
      </div>
      <div className={styles.colTwo}>
        <div className={styles.profileName}>
          <h2>{fullName}</h2>
          <p>{position1}</p>
        </div>
        <div className={styles.otherProfile}>
          <p>{position2}</p>
          <p>{responsibility}</p>
          <p>{expertise}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
        <div className={styles.iconBox}>
          <Link href={link} target="_blank" className={styles.icon}>
            <Linkedln />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileSingle;
