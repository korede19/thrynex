"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { menuLinks } from "@/utils/data";
import Dropdown from "@/svg/dropdown";
import Menu from "@/svg/menu";
import Close from "@/svg/close";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null); // To track the open submenu

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSubMenu = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <div className={styles.headerContain}>
      <div className={styles.logo}>
        <Image src="/assets/Logo.png" alt="logo" width={100} height={30} />
      </div>

      {/* Sidebar for mobile view */}
      <div
        className={`${styles.sidebar} ${
          isSidebarOpen ? styles.showSidebar : ""
        }`}
      >
        <div className={styles.closeSidebar} onClick={toggleSidebar}>
          <Close />
        </div>
        <div className={styles.menu}>
          <div className={styles.mobilelogo}>
            <Image src="/assets/Logo.png" alt="logo" width={100} height={30} />
          </div>
          {menuLinks.map((item, index) => (
            <div
              key={index}
              className={`${styles.linkWrapper} ${
                item.subLinks ? styles.hasDropdown : ""
              }`}
            >
              <Link
                href={item.link}
                className={styles.link}
                onClick={
                  item.subLinks
                    ? (e) => {
                        e.preventDefault();
                        toggleSubMenu(index);
                      }
                    : toggleSidebar
                }
              >
                {item.title}
                {item.subLinks && (
                  <span className={styles.dropdownIcon}>
                    <Dropdown />
                  </span>
                )}
              </Link>
              {item.subLinks && openSubMenu === index && (
                <div className={styles.dropdown}>
                  {item.subLinks.map((subLink, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subLink.link}
                      className={styles.dropdownLink}
                      onClick={toggleSidebar} // Optionally close sidebar on submenu link click
                    >
                      {subLink.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Header button and mobile toggle button */}
      <div className={styles.headerBtn}>
        <button>BOOK A CALL</button>
      </div>
      <div className={styles.menuToggle} onClick={toggleSidebar}>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
