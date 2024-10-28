import React from "react";
import styles from "./styles.module.css";
import Location from "@/svg/location";
import Mail from "@/svg/mail";
import Phone from "@/svg/phone";
import MapComponent from "../map";
import Linkedin from "@/svg/linkedin";
import Instagram from "@/svg/instagram";
import Link from "next/link";
import Twitter from "@/svg/twitter";

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.tabOne}>
          <h2>Start Your Journey to Better Business</h2>
          <button>
            <Link href="/contact">GET IN TOUCH</Link>
          </button>
        </div>
        <div className={styles.tabTwo}>
          <div className={styles.contain}>
            <div className={styles.Content}>
              <div className={styles.icon}>
                <Location />
              </div>
              <div>
                <p>
                  <em>Joensuu, 80110, Finland</em>
                </p>
                <p>
                  <em>Lagos, 100218. Nigeria</em>
                </p>
              </div>
            </div>
            <div className={styles.Content}>
              <div className={styles.icon}>
                <Mail />
              </div>
              <div>
                <p>info@thrynex.com</p>
              </div>
            </div>
            <div className={styles.Content}>
              <div className={styles.icon}>
                <Phone />
              </div>
              <div>
                <p>+358465356731</p>
              </div>
            </div>
            <div className={styles.socialIcons}>
              <Linkedin />
              <Instagram />
              <Twitter />
            </div>
          </div>
          <div className={styles.contain2}>
            <p>
              <Link href="/business-consultation-services">
                Business Consultation Services
              </Link>
            </p>
            <p>
              <Link href="/business-empowerment-partnership">
                Business Empowerment & Partnership
              </Link>
            </p>
            <p>
              <Link href="business-digital-solutions">
                Partnership Advanced Business Digital Solutions
              </Link>
            </p>
          </div>
          <div className={styles.contain3}>
            <MapComponent />
          </div>
        </div>
      </div>
      <div className={styles.copyrights}>
        <p>Copyright © 2024 All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
