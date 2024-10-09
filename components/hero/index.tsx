"use client";
import React from "react";
import styles from "./page.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Optional modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { slides } from "@/utils/data";

const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={1000}
    >
      {slides?.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className={styles.slider}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className={styles.innerContain}>
              <p>{slide.text}</p>
              <h1>{slide.title}</h1>
              <div className={styles.heroBtn}>
                <button className={styles.btnOne}> LEARN MORE</button>
                <button className={styles.btnTwo}> GET IN TOUCH</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
