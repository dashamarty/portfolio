"use client";
import Link from "next/link";
import styles from "./header.module.scss";
export const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.about}>
        <button onClick={() => handleScroll("about")} className={styles.link}>
          about me
        </button>
      </div>

      <Link href="/" className={styles.logo}>
        Daria Sinko
      </Link>

      <div className={styles.links__container}>
        <button
          onClick={() => handleScroll("projects")}
          className={styles.link}
        >
          projects
        </button>
        <button
          onClick={() => handleScroll("contacts")}
          className={styles.link}
        >
          contacts
        </button>
      </div>
    </header>
  );
};
