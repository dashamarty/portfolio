import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.about}>
        <a href="./" className={styles.link}>
          about me
        </a>
      </div>

      <a href="./" className={styles.logo}>
        Daria Sinko
      </a>

      <div className={styles.links__container}>
        <a href="./" className={styles.link}>
          projects
        </a>
        <a href="#contacts" className={styles.link}>
          contacts
        </a>
      </div>
    </header>
  );
};
