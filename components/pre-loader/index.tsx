"use client";
import { useState, useEffect, ReactNode } from "react";
import styles from "./styles.module.css";
import { InfinitySpin } from "react-loader-spinner";

interface PreloaderProps {
  children: ReactNode;
}

const Preloader: React.FC<PreloaderProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={styles.loaderContain}>
        <InfinitySpin width="200" color="#ffffff" />
        <p>Loading...</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default Preloader;
