"use client";
import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="loader">
      <InfinitySpin
        visible={true}
        width="800"
        color="#ffffff"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loading;
