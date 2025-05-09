"use client";
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./contactButton.module.scss";

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

const ContactButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the contacts element is visible in the viewport
      const contactsElement = document.getElementById("contacts");
      let contactsInView = false;
      if (contactsElement) {
        const rect = contactsElement.getBoundingClientRect();
        contactsInView = rect.top < window.innerHeight && rect.bottom > 0;
      }

      // Show the button if scrolled beyond the window height and not in the contacts area
      if (window.scrollY > window.innerHeight && !contactsInView) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToFooter = () => {
    document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToFooter}
      className={classNames(styles.contactButton, {
        [styles.visible]: isVisible,
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.icon}>
        <svg
          width="298"
          height="295"
          viewBox="0 0 298 295"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_466_5)">
            <path
              d="M298 147.177L256.052 162.572L292.004 189.07L247.412 192.007L274.352 227.582L230.734 217.846L246.583 259.535L207.458 237.989L210.919 282.448L179.485 250.746L170.184 294.366L149 255.087L127.816 294.366L118.515 250.746L87.0809 282.448L90.5415 237.989L51.417 259.535L67.2663 217.846L23.6477 227.582L50.5879 192.007L5.99605 189.07L41.9483 162.572L0 147.177L41.9483 131.794L5.99605 105.296L50.5879 102.358L23.6477 66.7842L67.2663 76.52L51.417 34.8189L90.5415 56.3769L87.0809 11.918L118.515 43.6195L127.816 0L149 39.2672L170.184 0L179.485 43.6195L210.919 11.918L207.458 56.3769L246.583 34.8189L230.734 76.52L274.352 66.7842L247.412 102.358L292.004 105.296L256.052 131.794L298 147.177Z"
              fill="#023048"
            />
            <path
              d="M95.2322 136.102C89.6581 136.102 86.6766 132.019 86.6766 127.061C86.6766 121.292 90.4683 118.181 95.135 118.181C99.4452 118.181 102.524 120.773 103.01 125.181H100.385C99.9313 122.329 97.9545 120.514 95.0702 120.514C91.6674 120.514 89.3988 123.01 89.3988 127.061C89.3988 131.436 92.0562 133.769 95.2646 133.769C98.0193 133.769 99.8989 132.019 100.385 129.037H103.01C102.524 133.477 99.6721 136.102 95.2322 136.102Z"
              fill="white"
            />
            <path
              d="M114.092 136.102C108.582 136.102 105.665 132.181 105.665 126.996C105.665 121.26 109.425 118.181 114.092 118.181C119.568 118.181 122.518 122.135 122.518 126.996C122.518 132.926 118.92 136.102 114.092 136.102ZM108.42 126.996C108.42 131.403 110.98 133.769 114.092 133.769C117.754 133.769 119.763 130.723 119.763 126.996C119.763 123.139 117.527 120.514 114.092 120.514C110.656 120.514 108.42 123.139 108.42 126.996Z"
              fill="white"
            />
            <path
              d="M126.036 135.746V118.57H128.175L128.434 121.195C129.601 119.38 131.837 118.181 134.397 118.181C138.091 118.181 140.554 120.579 140.554 124.371V135.746H137.865V124.468C137.865 122.07 136.309 120.547 133.716 120.547C130.638 120.547 128.758 122.686 128.726 125.311V135.746H126.036Z"
              fill="white"
            />
            <path
              d="M151.488 135.746C148.15 135.746 146.367 134.028 146.367 130.852V120.838H143.191V118.57H146.367V112.704H149.057V118.57H153.691V120.838H149.057V130.852C149.057 132.57 149.9 133.477 151.488 133.477H153.4V135.746H151.488Z"
              fill="white"
            />
            <path
              d="M162.403 136.005C158.514 136.005 156.019 133.996 156.019 130.852C156.019 126.899 159.843 126.153 163.278 125.797C165.903 125.537 168.171 125.57 168.204 124.176C168.171 122.005 166.389 120.482 163.796 120.482C161.301 120.482 159.357 121.875 159.065 123.917H156.407C156.732 120.547 159.778 118.181 163.861 118.181C168.107 118.181 170.829 120.709 170.829 124.338V132.7C170.829 133.25 171.121 133.542 171.704 133.542H172.676V135.746H171.153C169.306 135.746 168.334 134.903 168.334 133.315V132.797C167.329 134.774 165.384 136.005 162.403 136.005ZM158.708 130.787C158.708 132.57 160.329 133.704 162.792 133.704C166 133.704 168.204 131.662 168.204 128.811V126.574C167.458 127.579 165.546 127.774 163.44 128C161.074 128.26 158.708 128.584 158.708 130.787Z"
              fill="white"
            />
            <path
              d="M183.372 136.102C177.798 136.102 174.817 132.019 174.817 127.061C174.817 121.292 178.609 118.181 183.275 118.181C187.586 118.181 190.664 120.773 191.15 125.181H188.525C188.072 122.329 186.095 120.514 183.21 120.514C179.808 120.514 177.539 123.01 177.539 127.061C177.539 131.436 180.197 133.769 183.405 133.769C186.16 133.769 188.039 132.019 188.525 129.037H191.15C190.664 133.477 187.812 136.102 183.372 136.102Z"
              fill="white"
            />
            <path
              d="M201.27 135.746C197.932 135.746 196.15 134.028 196.15 130.852V120.838H192.974V118.57H196.15V112.704H198.84V118.57H203.474V120.838H198.84V130.852C198.84 132.57 199.682 133.477 201.27 133.477H203.182V135.746H201.27Z"
              fill="white"
            />
            <path
              d="M126.431 180.994V163.818H128.57L128.83 166.476C129.996 164.629 132.232 163.429 134.695 163.429C137.288 163.429 139.232 164.758 140.107 166.832C141.209 164.823 143.575 163.429 146.2 163.429C149.83 163.429 152.163 165.99 152.163 169.49V180.994H149.473V169.587C149.473 167.286 148.047 165.795 145.746 165.795C142.538 165.795 140.658 167.934 140.626 170.559V180.994H137.969V169.587C137.969 167.286 136.543 165.795 134.242 165.795C131.033 165.795 129.154 167.934 129.121 170.559V180.994H126.431Z"
              fill="white"
            />
            <path
              d="M163.954 181.351C158.866 181.351 155.496 177.624 155.496 172.471C155.496 166.605 159.287 163.429 163.63 163.429C168.361 163.429 171.408 166.605 171.505 172.115V172.86H158.185C158.347 176.522 160.486 179.018 163.954 179.018C166.352 179.018 168.102 177.818 168.815 175.582H171.44C170.662 179.115 167.875 181.351 163.954 181.351ZM158.347 170.624H168.686C168.199 167.61 166.385 165.763 163.63 165.763C160.908 165.763 158.898 167.545 158.347 170.624Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_466_5">
              <rect width="298" height="294.366" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div
          className={classNames(styles.contacts, styles.contactsOverlay, {
            [styles.visibleContacts]: isHovered,
          })}
        >
          {contactsData.map((contact, index) => (
            <div className={styles.contacts__item} key={index}>
              <span>{contact.title}</span>
              <span className={styles.line}></span>
              <span>{contact.key}</span>
            </div>
          ))}
        </div>
      </div>
    </button>
  );
};

export default ContactButton;
