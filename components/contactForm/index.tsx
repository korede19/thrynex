"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { InfinitySpin } from "react-loader-spinner";

type Form = {
  firstName: string;
  lastName: string;
  email: string;
  messages: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Form>();

  const [loading, setLoading] = useState(false);

  const submit: SubmitHandler<Form> = (e) => {
    setLoading(true);
    const data = {
      firstName: e.firstName,
      lastName: e.lastName,
      from: e.email,
      body: `<p>Hi Thrynex, ${e.firstName} sent you a message</p>
              <p>${e.messages}</p>`,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(`/api/send`, options)
      .then(() => {
        toast.success("Message sent Successfully");
        setLoading(false);
        reset();
      })
      .catch(() => {
        setLoading(false);
        toast.error("Something went wrong!! Please try again");
      });
  };

  return (
    <div className={styles.formContain}>
      <h2>Drop Us a Line</h2>
      <p>
        Your email address will not be published. Required fields are marked *
      </p>
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        <div className={styles.Contain}>
          <div>
            <input
              type="text"
              placeholder="First Name *"
              className={styles.forms}
              {...register("firstName", { required: "First Name is required" })}
            />
            {errors.firstName && (
              <span className="error">{errors.firstName.message}</span>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name *"
              className={styles.forms}
              {...register("lastName", { required: "Last Name is required" })}
            />
            {errors.lastName && (
              <span className="error">{errors.lastName.message}</span>
            )}
          </div>
        </div>
        <input
          type="email"
          placeholder="Your Email *"
          className={styles.forms}
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
        <textarea
          placeholder="Your Message... *"
          className={styles.textArea}
          {...register("messages", { required: "Messages is required" })}
        />
        {errors.messages && (
          <span className="error">{errors.messages.message}</span>
        )}
        {loading ? (
          <InfinitySpin width="100" color="#fff" />
        ) : (
          <button type="submit">Get In Touch</button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
