"use client";
import React, { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./fortuneBlock.module.scss";
import { gsap } from "gsap";

const FortuneCookie: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("You will be successful and happy");
  const fortuneRef = useRef<HTMLDivElement>(null);

  const messages = [
    "Today, you’ll hire a talented \ngraphic designer named Daria.",
    "A brilliant graphic designer \nwill join your team today.",
    "Your search for the perfect \ngraphic designer ends today.",
    "You’ll find a sock you thought \nwas lost forever…But it still \nwon’t match the one you’re holding.",
    "Your favorite snack will mysteriously\n taste better today. \nScientists are baffled, but you’ll just enjoy it!",
  ];

  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  useEffect(() => {
    // Shaking animation every 5 seconds
    const shakeInterval = setInterval(() => {
      const shakeTimeline = gsap.timeline();
      shakeTimeline
        .to(fortuneRef.current, { rotation: -5, duration: 0.1 })
        .to(fortuneRef.current, { rotation: 5, duration: 0.1 })
        .to(fortuneRef.current, { rotation: -5, duration: 0.1 })
        .to(fortuneRef.current, { rotation: 5, duration: 0.1 })
        .to(fortuneRef.current, { rotation: 0, duration: 0.1 });
    }, 5000);

    return () => clearInterval(shakeInterval); // Cleanup interval on unmount
  }, []);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setMessage(randomMessage()); // Set random message

      // GSAP animation for opening the fortune cookie
      const timeline = gsap.timeline();

      timeline
        .to(fortuneRef.current, {
          rotation: -5,
          duration: 0.1,
          delay: 0.2,
        })
        .to(fortuneRef.current, { rotation: 5, duration: 0.1 })
        .to(fortuneRef.current, { rotation: -5, duration: 0.1 })
        .to(fortuneRef.current, { rotation: 5, duration: 0.1 })
        .to(fortuneRef.current, { rotation: -5, duration: 0.1 })
        .to(fortuneRef.current, { rotation: 0, duration: 0.1 })
        .addLabel("break", "+=0.3")
        .to(
          `.${styles.fortuneLeft}`,
          {
            rotation: -45,
            x: -70,
            y: 70,
            duration: 0.5,
          },
          "break",
        )
        .to(
          `.${styles.fortuneRight}`,
          {
            rotation: 45,
            x: 70,
            y: 70,
            duration: 0.5,
          },
          "break",
        )
        .fromTo(
          `.${styles.fortuneMessage} span`,
          { x: "110%" },
          { x: "0%", duration: 1 },
          "break",
        );

      // Auto-close after 3 seconds
      setTimeout(() => {
        setIsOpen(false);
        gsap.to(`.${styles.fortuneLeft}`, {
          rotation: 0,
          x: 0,
          y: 0,
          duration: 0.5,
        });
        gsap.to(`.${styles.fortuneRight}`, {
          rotation: 0,
          x: 0,
          y: 0,
          duration: 0.5,
        });
      }, 8000);
    }
  };

  return (
    <div className={styles.background}>
      <div
        className={classNames(styles.fortuneWrapper, {
          [styles.open]: isOpen,
        })}
        onClick={handleClick}
      >
        <div ref={fortuneRef} className={styles.fortune}>
          <div className={styles.fortuneLeft}></div>
          <div className={styles.fortuneRight}></div>
          <div className={styles.fortuneMessage}>
            <span>{message}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FortuneCookie;
