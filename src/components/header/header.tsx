import Link from "next/link";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.about}>
        <Link href="./" className={styles.link}>
          about me
        </Link>
      </div>

      <Link href="./" className={styles.logo}>
        Daria Sinko
      </Link>

      <div className={styles.links__container}>
        <Link href="#projects" className={styles.link}>
          projects
        </Link>
        <Link href="#contacts" className={styles.link}>
          contacts
        </Link>
      </div>
    </header>
  );
};
