"use client";
import { useState, useEffect } from "react";

export default function useImagePreloader(imageUrls: string[]) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let imagesLoaded = 0;

    const imageLoadHandler = () => {
      imagesLoaded += 1;
      if (imagesLoaded === imageUrls.length) {
        setLoading(false);
      }
    };

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = imageLoadHandler;
    });
  }, [imageUrls]);

  return loading;
}
