import React from "react";
import Link from "next/link";

const Instagram = () => {
  return (
    <Link
      href="https://www.instagram.com/thrynex/?igsh=cnk2emFiamYyMGVo"
      target="_blank"
      className="iconLink"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
      >
        <g fill="none" stroke="currentColor" strokeWidth={0.85}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
          ></path>
          <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z"></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m17.5 6.51l.01-.011"
          ></path>
        </g>
      </svg>
    </Link>
  );
};

export default Instagram;
