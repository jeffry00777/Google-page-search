import React from "react";

export default function GoogleIcon({ width, height, cls }) {
  return (
    <div>
      <img className={cls} src="/google.png" alt="Google Logo" />
      <span className="me-img">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 60 40"
        >
          <text
            x="0"
            y="30"
            fontFamily="Arial, sans-serif"
            fontSize="30"
            fill="#4285F4"
          >
            M
          </text>
          <text
            x="22"
            y="30"
            fontFamily="Arial, sans-serif"
            fontSize="30"
            fill="#EA4335"
          >
            e
          </text>
        </svg>
      </span>
    </div>
  );
}
