import Image from "next/image";
import styles from "./imageModal.module.scss";

// Компонент для модалки
const Modal: React.FC<{ src: string; alt: string; onClose: () => void }> = ({
  src,
  alt,
  onClose,
}) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <Image
          className={styles.modalContent__image}
          src={src}
          alt={alt}
          width={1000}
          height={1000}
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default Modal;
