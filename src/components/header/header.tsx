"use client";
import styles from "./header.module.scss";

export const Header = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.about}>
        <button onClick={() => handleScroll("about")} className={styles.link}>
          about me
        </button>
      </div>

      <a href="./" className={styles.logo}>
        Daria Sinko
      </a>

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
