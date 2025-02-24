import { Contact } from "../contact/contact";
import DownloadButton from "../cv/cv";
import { Figure1, Figure1Mobile } from "../figures/figure1";
import styles from "./footer.module.scss";

const contactsData = [
  {
    title: "email",
    key: "dariasinkodesign@gmail.com",
    href: "mailto:dariasinkodesign@gmail.com",
  },
  { title: "phone", key: "+45 (7147) 83-87", href: "tel:+4571478387" },
  {
    title: "linkedin",
    key: "@dariasinko",
    href: "https://www.linkedin.com/in/dariasinko",
  },
  {
    title: "behance",
    key: "@dashasinko",
    href: "https://www.behance.net/dashasinko",
  },
];

export const Footer = () => {
  return (
    <>
      <DownloadButton />
      <footer className={styles.footer} id="contacts">
        <div className={styles.title__wrapper}>
          <div className={styles.title}>
            <span>Let’s make</span>
            <span className={styles.italic}>something</span>
            <span>great!</span>
          </div>
          <span className={styles.mobile}>
            <Figure1Mobile />
          </span>
        </div>

        <div className={styles.content}>
          <span className={styles.desktop}>
            <Figure1 />
          </span>

          <div className={styles.contacts}>
            {contactsData.map((contact, index) => (
              <Contact
                key={index}
                title={contact.title}
                href={contact.href}
                keyProp={contact.key}
              />
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};
