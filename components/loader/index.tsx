"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";

type LoaderProps = {
  max: number;
  speed?: number;
};

const Loader: React.FC<LoaderProps> = ({ max, speed = 100 }) => {
  const [progress, setProgress] = useState(0);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const isAnimating = useRef(false);
  const hasLoaded = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !isAnimating.current &&
            !hasLoaded.current
          ) {
            isAnimating.current = true;
            hasLoaded.current = true;
            animateLoader();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  const animateLoader = () => {
    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;

      const newProgress = Math.min(
        Math.floor((elapsedTime / speed) * max),
        max
      );

      setProgress(newProgress);

      if (newProgress < max) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        isAnimating.current = false;
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={loaderRef} className={styles.loaderContainer}>
      <div
        className={styles.progressBar}
        style={{ width: `${progress}%` }}
      ></div>
      <p className={styles.text}>{Math.round(progress)}%</p>
    </div>
  );
};

export default Loader;
