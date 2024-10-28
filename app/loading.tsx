"use client";
import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loading: React.FC = () => {
  return (
    <div className="loader">
      <InfinitySpin width="200" color="#ffffff" />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
