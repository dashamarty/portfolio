import styles from "./possibleBlock.module.scss";
import Image from "next/image";

export const PossibleBlock = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image1}
        src={"/possible/1.png"}
        alt={""}
        height={1000}
        width={1000}
      />
      <Image
        className={styles.image2}
        src={"/possible/2.png"}
        alt={""}
        height={2224}
        width={2134}
      />
    </div>
  );
};
