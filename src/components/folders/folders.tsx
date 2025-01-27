"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./folder.module.scss";
import CardList from "../cardList/cardList";

type FolderId = "folder1" | "folder2" | "folder3";

export default function Folders() {
  const [foldersOrder, setFoldersOrder] = useState<FolderId[]>([
    "folder1",
    "folder2",
    "folder3",
  ]);

  const handleClick = (folderId: FolderId) => {
    const clickedIndex = foldersOrder.indexOf(folderId);
    if (clickedIndex === 0) return; // Если верхняя папка, ничего не меняем
    const newOrder = [...foldersOrder];
    newOrder.unshift(newOrder.splice(clickedIndex, 1)[0]); // Переместить папку наверх
    setFoldersOrder(newOrder);
  };

  // Пример данных для карточек
  const folderData = {
    folder1: [
      {
        title: "Card 1",
        description:
          "Description 1 Description Description Description Description Description Description DescriptionDescription",
        imageUrl: "/images/card1.jpg",
        link: "/link1",
      },
      {
        title: "Card 2",
        description: "Description 2",
        imageUrl: "/images/card2.jpg",
        link: "/link2",
      },
      {
        title: "Card 2",
        description: "Description 2",
        imageUrl: "/images/card2.jpg",
        link: "/link2",
      },
      {
        title: "Card 2",
        description: "Description 2",
        imageUrl: "/images/card2.jpg",
        link: "/link2",
      },
    ],
    folder2: [
      {
        title: "Card 3",
        description: "Description 3",
        imageUrl: "/images/card3.jpg",
        link: "/link3",
      },
      {
        title: "Card 4",
        description: "Description 4",
        imageUrl: "/images/card4.jpg",
        link: "/link4",
      },
      {
        title: "Card 2",
        description: "Description 2",
        imageUrl: "/images/card2.jpg",
        link: "/link2",
      },
      {
        title: "Card 2",
        description: "Description 2",
        imageUrl: "/images/card2.jpg",
        link: "/link2",
      },
    ],
    folder3: [
      {
        title: "Card 5",
        description: "Description 5",
        imageUrl: "/images/card5.jpg",
        link: "/link5",
      },
      {
        title: "Card 6",
        description: "Description 6",
        imageUrl: "/images/card6.jpg",
        link: "/link6",
      },
      {
        title: "Card 2",
        description: "Description 2",
        imageUrl: "/images/card2.jpg",
        link: "/link2",
      },
      {
        title: "Card 2",
        description: "Description 2",
        imageUrl: "/images/card2.jpg",
        link: "/link2",
      },
    ],
  };

  return (
    <div className={styles.foldersContainer} id="projects">
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
            <Image
              src={`/folders/${folderId}m.png`}
              alt={`Folder ${folderId}`}
              width={390}
              height={481}
              className={styles.folderImageMobile}
              priority
            />

            {/* Добавляем слайдер с карточками внутри каждой папки */}
            <CardList cards={folderData[folderId]} />
          </div>
        );
      })}
    </div>
  );
}
