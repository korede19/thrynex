"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { menuLinks } from "@/utils/data";
import Dropdown from "@/svg/dropdown";

const Header = () => {
  return (
    <div className={styles.headerContain}>
      <div className={styles.logo}>
        <Image src="/assets/Logo.png" alt="logo" width={100} height={30} />
      </div>
      <div className={styles.headerLinks}>
        {menuLinks.map((item, index) => (
          <div
            key={index}
            className={`${styles.linkWrapper} ${
              item.subLinks ? styles.hasDropdown : ""
            }`}
          >
            <Link href={item.link} className={styles.link}>
              {item.title}
              {item.subLinks && (
                <span className={styles.dropdownIcon}>
                  <Dropdown />
                </span>
              )}
            </Link>
            {item.subLinks && (
              <div className={styles.dropdown}>
                {item.subLinks.map((subLink, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subLink.link}
                    className={styles.dropdownLink}
                  >
                    {subLink.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.headerBtn}>
        <button>BOOK A CALL</button>
      </div>
    </div>
  );
};

export default Header;
