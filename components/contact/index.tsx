import React from "react";
import styles from "./styles.module.css";
import { contactText } from "@/utils/data";
import Image from "next/image";
import ContactForm from "../contactForm";
import AnimatedComponent from "../animations";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pgContain}>
        <div className={styles.colOne}>
          <AnimatedComponent animationType="fade">
            <Image
              src="/assets/contact.png"
              width={500}
              height={500}
              alt="contactImg"
            />
          </AnimatedComponent>
        </div>
        <div className={styles.colTwo}>
          <div className={styles.textContain}>
            <h6>_CONTACT US_</h6>
            <h1>Get In Touch</h1>
            <p>
              Get in touch to discuss your business needs today. Please give us
              a call, drop us an email or fill out the contact form and we’ll
              get back to you.
            </p>
          </div>
          <div className={styles.iconContain}>
            <div>
              {contactText?.map((items, index) => {
                return (
                  <div key={index} className={styles.contactItems}>
                    <div className={styles.icon}> {items.icon} </div>
                    <div className={styles.items}>
                      <h3>{items.title}</h3>
                      <p>{items.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <AnimatedComponent animationType="zoom-in">
        <ContactForm />
      </AnimatedComponent>
    </div>
  );
};

export default Contact;
