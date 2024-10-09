import React from "react";
import styles from "./styles.module.css";

const ContactForm = () => {
  return (
    <div className={styles.formContain}>
      <h2>Drop Us a Line</h2>
      <p>
        Your email address will not be published. Required fields are marked *
      </p>
      <div className={styles.form}>
        <div className={styles.Contain}>
          <input
            type="text"
            placeholder="First Name *"
            className={styles.forms}
          />
          <input
            type="text"
            placeholder="Last Name *"
            className={styles.forms}
          />
        </div>
        <input
          type="email"
          placeholder="Your Email *"
          className={styles.forms}
        />
        <textarea
          name="message"
          placeholder="Your Message... *"
          className={styles.textArea}
        />
        <button>Get In Touch</button>
      </div>
    </div>
  );
};

export default ContactForm;
