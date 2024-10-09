"use client";
import React from "react";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Virtual } from "swiper/modules";
import Image from "next/image";
import { ourTeams } from "@/utils/data";

const Teams = () => {
  return (
    <div className={styles.pageContainer}>
      <Swiper
        modules={[Pagination, Autoplay, Virtual]}
        pagination={{
          clickable: true,
        }}
        spaceBetween={40}
        slidesPerView={4}
        slidesPerGroup={2}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1500}
        virtual
      >
        {ourTeams?.map((slide, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <div className={styles.teamContainer}>
              <Image
                src={slide.image}
                width={500}
                height={500}
                priority
                className={styles.teamsImage}
                alt="ourTeams Img"
              />
            </div>
            <div className={styles.infoContain}>
              <h2>{slide.name}</h2>
              <p>{slide.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Teams;
