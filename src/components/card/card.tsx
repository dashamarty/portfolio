import Image from "next/image";
import styles from "./card.module.scss";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const Card = ({ title, description, imageUrl, link }: CardProps) => {
  return (
    <Link href={link} className={styles.card}>
      <Image
        src={imageUrl}
        alt={title}
        width={250}
        height={250}
        className={styles.cardImage}
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
};

export default Card;
