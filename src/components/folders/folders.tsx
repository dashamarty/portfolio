"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./folder.module.scss";

type FolderId = "folder1" | "folder2" | "folder3";

export default function Folders() {
  const [foldersOrder, setFoldersOrder] = useState<FolderId[]>([
    "folder1",
    "folder2",
    "folder3",
  ]);

  const handleClick = (folderId: FolderId) => {
    const clickedIndex = foldersOrder.indexOf(folderId);

    // Если верхняя папка (индекс 0), ничего не менять
    if (clickedIndex === 0) return;

    // Сменить порядок папок, перемещая кликнутую папку наверх
    const newOrder = [...foldersOrder];
    newOrder.unshift(newOrder.splice(clickedIndex, 1)[0]); // Переместить папку наверх
    setFoldersOrder(newOrder);
  };

  return (
    <div className={styles.foldersContainer}>
      {foldersOrder.map((folderId, index) => {
        const topPosition = index * -40;
        const zIndex = 3 - index;

        return (
          <div
            key={folderId}
            className={styles.folder}
            onClick={() => handleClick(folderId)}
            style={{
              top: `${topPosition}px`,
              zIndex,
            }}
          >
            <Image
              src={`/folders/${folderId}.png`}
              alt={`Folder ${folderId}`}
              width={2501}
              height={1521}
              className={styles.folderImage}
              priority
            />
          </div>
        );
      })}
    </div>
  );
}
