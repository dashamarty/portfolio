"use client";
import { useState } from "react";
import styles from "./fotruneBlock.module.scss";

const FortuneBlock = () => {
  const [isCracked, setIsCracked] = useState(false);

  const handleClick = () => {
    setIsCracked(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.cookieWrapper}>
        <div
          className={`${styles.cookieHalf} ${isCracked ? styles.crackedLeft : ""}`}
          onClick={handleClick}
        />
        <div
          className={`${styles.cookieHalf} ${isCracked ? styles.crackedRight : ""}`}
          onClick={handleClick}
        />
      </div>
      {isCracked && (
        <div className={styles.textBox}>
          <p>Предсказание: Тебя ждёт удача!</p>
        </div>
      )}
    </div>
  );
};

export default FortuneBlock;
