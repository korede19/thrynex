import React from "react";
import Link from "next/link";

const Twitter = () => {
  return (
    <Link
      href="https://x.com/thrynex?s=21&t=A5E1475gEYfdjLnYL9Bo8Q"
      target="_blank"
      className="iconLink"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.85}
          d="m13.081 10.712l-4.786-6.71a.6.6 0 0 0-.489-.252H5.28a.6.6 0 0 0-.488.948l6.127 8.59m2.162-2.576l6.127 8.59a.6.6 0 0 1-.488.948h-2.526a.6.6 0 0 1-.489-.252l-4.786-6.71m2.162-2.576l5.842-6.962m-8.004 9.538L5.077 20.25"
        ></path>
      </svg>
    </Link>
  );
};

export default Twitter;
