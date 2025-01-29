"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./folder.module.scss";
import CardList from "../cardList/cardList";
import { folders } from "@/data/projects";

export default function Folders() {
  const [foldersOrder, setFoldersOrder] = useState(
    folders.map((folder) => folder.id),
  );

  const handleClick = (folderId: string) => {
    const clickedIndex = foldersOrder.indexOf(folderId);
    if (clickedIndex === 0) return; // Do nothing if the clicked folder is already at the top
    const newOrder = [...foldersOrder];
    newOrder.unshift(newOrder.splice(clickedIndex, 1)[0]); // Move folder to the top
    setFoldersOrder(newOrder);
  };

  return (
    <div className={styles.foldersContainer} id="projects">
      {foldersOrder.map((folderId, index) => {
        const folder = folders.find((f) => f.id === folderId);
        if (!folder) return null;

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
            <Image
              src={`/folders/${folderId}m.png`}
              alt={`Folder ${folderId} Mobile`}
              width={390}
              height={481}
              className={styles.folderImageMobile}
              priority
            />
            {/* Render cards for all projects within this folder */}
            <CardList
              cards={folder.projects.map((project) => ({
                title: project.title,
                description: project.description,
                imageUrl: project.imageUrl,
                link: project.link,
              }))}
            />
          </div>
        );
      })}
    </div>
  );
}
