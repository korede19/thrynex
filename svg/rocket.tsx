import React from "react";

const Rocket = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3em"
        height="3em"
        viewBox="0 0 24 24"
      >
        <g fill="none" stroke="currentColor">
          <path d="M11.449 16.449L7.55 12.55C8.998 8.167 13.13 5 18 5q.485 0 .959.041q.04.474.041.96c0 4.87-3.165 9-7.552 10.448Z"></path>
          <path
            strokeLinecap="round"
            d="m8 16l-1 1m2.5.5l-1 1m-2-4l-1 1"
          ></path>
          <circle cx={13} cy={11} r={1}></circle>
          <path strokeLinecap="round" d="m14 6l4 4"></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 15.5V19l-9-9h3.5"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default Rocket;
