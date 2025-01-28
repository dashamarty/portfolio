"use client";
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./toTheTopButton.module.scss";

const ToTheTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling past 100vh
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={classNames(styles.toTheTopButton, {
        [styles.visible]: isVisible,
      })}
    >
      <svg
        width="167"
        height="167"
        viewBox="0 0 167 167"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_252_347)">
          <path
            d="M167 83.5C92.7778 88.6256 88.6256 92.7778 83.5 167C78.3744 92.7778 74.2222 88.6256 0 83.5C74.2222 78.3744 78.3744 74.2222 83.5 0C88.6256 74.2222 92.7778 78.3744 167 83.5Z"
            fill="#AA0202"
          />
          <path
            d="M71.4561 86.3616L83.1934 66.6294L97 86.3616L85.1134 77.0686L85.3081 99.701L81.3273 77.4596L71.4561 86.3616Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_252_347">
            <rect width="167" height="167" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default ToTheTopButton;
