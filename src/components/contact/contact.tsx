import styles from "./contact.module.scss";

export const Contact = ({
  title,
  keyProp,
  href,
}: {
  title: string;
  keyProp: string;
  href: string;
}) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <span className={styles.line}></span>
      <a href={href} className={styles.link}>
        {keyProp}
      </a>
    </div>
  );
};
