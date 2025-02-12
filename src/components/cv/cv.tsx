"use client";
import React from "react";
import styles from "./cv.module.scss";

const DownloadButton = () => {
  const handleDownload = () => {
    const pdfUrl = "/CV.pdf";
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button onClick={handleDownload} className={styles.button}>
      Open my CV
    </button>
  );
};

export default DownloadButton;
