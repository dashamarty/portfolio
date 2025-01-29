import styles from "./toolsBlock.module.scss";
import Image from "next/image";

const ToolsBlock = ({}) => {
  return (
    <div className={styles.toolsBlock}>
      <div className={styles.content}>
        <Image
          className={styles.tools}
          src="/tools.svg"
          alt="Tools"
          width={1116}
          height={437}
        />
        <div>
          <Image
            className={styles.laptop}
            src="/tools/small/mackbook.png"
            alt="Tools"
            width={435}
            height={435}
          />
          <Image
            className={styles.notebook}
            src="/tools/small/notebook.png"
            alt="Tools"
            width={435}
            height={435}
          />
          <Image
            className={styles.table}
            src="/tools/small/table.png"
            alt="Tools"
            width={1224}
            height={435}
          />
        </div>
      </div>
    </div>
  );
};

export default ToolsBlock;
