"use client";
import Image from "next/image";
import styles from "./projectDetail.module.scss";
import { useState } from "react";
import Modal from "../imageModal/imageModal";

// Типы данных для контента
type Content =
  | { type: "text"; text: string | React.ReactNode } // Только текст
  | { type: "image"; src: string; alt: string } // Только картинка
  | {
      type: "imageText";
      src: string;
      alt: string;
      text: string | React.ReactNode;
    } // Картинка с текстом
  | { type: "fullScreenImage"; src: string; alt: string } // Картинка на весь экран
  | { type: "textList"; text: string | React.ReactNode; listItems: string[] } // Список с текстом
  | {
      type: "textTitleText";
      title: string;
      text: string | React.ReactNode;
      additionalText?: string | React.ReactNode;
    } // Текст с заголовком и дополнительным текстом
  | { type: "titleText"; title: string; text: string | React.ReactNode } // Заголовок с текстом
  | { type: "halfScreenImage"; src: string; alt: string }
  | {
      type: "textListText";
      text: string | React.ReactNode;
      listItems: string[];
      additionalText: string | React.ReactNode;
    } // Список с дополнительным текстом
  | { type: "video"; src: string; poster?: string }
  | { type: "fullText"; text: string };

// Компонент ProjectDetail, который принимает контент и рендерит его
type ProjectDetailProps = {
  content: unknown; // Используем unknown для более гибкой проверки типов
};

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  // Открытие модалки
  const openModal = (src: string) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

  // Закрытие модалки
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };
  // Проверка, что content является объектом с полем type
  if (typeof content === "object" && content !== null && "type" in content) {
    const contentAs = content as Content; // Преобразуем content в тип Content

    switch (contentAs.type) {
      // Обработка текста
      case "text":
        return typeof contentAs.text === "string" ? (
          <p
            className={styles.textFlex}
            dangerouslySetInnerHTML={{ __html: contentAs.text }}
          /> // Текст с HTML-разметкой
        ) : (
          <p className={styles.text}>{contentAs.text}</p> // JSX или обычный текст
        );

      // Обработка изображения
      case "image":
        return (
          <div className={styles.imageContainer}>
            <Image
              className={styles.image} // Стили для изображения
              src={contentAs.src}
              alt={contentAs.alt}
              width={2000}
              height={2000}
            />
            <div
              className={styles.magnifier}
              onClick={() => openModal(contentAs.src)} // Открытие модалки по клику
            >
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 16.5L25.2732 28.3233M19.3748 10.414C19.3748 15.2739 15.4352 19.2135 10.5754 19.2135C5.71554 19.2135 1.77588 15.2739 1.77588 10.414C1.77588 5.55422 5.71554 1.61456 10.5754 1.61456C15.4352 1.61456 19.3748 5.55422 19.3748 10.414Z"
                  stroke="#AA0202"
                  strokeWidth="3.22917"
                />
              </svg>
            </div>
            {isModalOpen && modalImage && (
              <Modal
                src={modalImage}
                alt={contentAs.alt}
                onClose={closeModal} // Закрытие модалки
              />
            )}
          </div>
        );

      case "halfScreenImage":
        return (
          <div className={styles.imageContainer}>
            <Image
              className={styles.ImageHalfScreen} // Стили для изображения на пол экрана
              src={contentAs.src}
              alt={contentAs.alt}
              width={960}
              height={540}
            />
            <div
              className={styles.magnifier}
              onClick={() => openModal(contentAs.src)} // Открытие модалки по клику
            >
              🔍
            </div>
            {isModalOpen && modalImage && (
              <Modal
                src={modalImage}
                alt={contentAs.alt}
                onClose={closeModal} // Закрытие модалки
              />
            )}
          </div>
        );

      // Обработка изображения с текстом
      case "imageText":
        return (
          <div className={styles.ImageText}>
            <div className={styles.imageContainer}>
              <Image
                src={contentAs.src}
                alt={contentAs.alt}
                width={2000}
                height={2000}
                className={styles.image}
              />
              <div
                className={styles.magnifier}
                onClick={() => openModal(contentAs.src)} // Открытие модалки по клику
              >
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5 16.5L25.2732 28.3233M19.3748 10.414C19.3748 15.2739 15.4352 19.2135 10.5754 19.2135C5.71554 19.2135 1.77588 15.2739 1.77588 10.414C1.77588 5.55422 5.71554 1.61456 10.5754 1.61456C15.4352 1.61456 19.3748 5.55422 19.3748 10.414Z"
                    stroke="#AA0202"
                    strokeWidth="3.22917"
                  />
                </svg>
              </div>
              {isModalOpen && modalImage && (
                <Modal
                  src={modalImage}
                  alt={contentAs.alt}
                  onClose={closeModal} // Закрытие модалки
                />
              )}
            </div>
            {typeof contentAs.text === "string" ? (
              <p className={styles.text}>{contentAs.text}</p> // Текст рядом с изображением
            ) : (
              <p
                dangerouslySetInnerHTML={{ __html: contentAs.text as string }}
              />
            )}
          </div>
        );

      // Обработка изображения на весь экран
      case "fullScreenImage":
        return (
          <>
            <Image
              src={contentAs.src}
              alt={contentAs.alt}
              width={2500}
              height={2000}
              className={styles.imageFull} // Стили для изображения на весь экран
            />
            <div
              className={styles.magnifier}
              onClick={() => openModal(contentAs.src)} // Открытие модалки по клику
            >
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 16.5L25.2732 28.3233M19.3748 10.414C19.3748 15.2739 15.4352 19.2135 10.5754 19.2135C5.71554 19.2135 1.77588 15.2739 1.77588 10.414C1.77588 5.55422 5.71554 1.61456 10.5754 1.61456C15.4352 1.61456 19.3748 5.55422 19.3748 10.414Z"
                  stroke="#AA0202"
                  strokeWidth="3.22917"
                />
              </svg>
            </div>
            {isModalOpen && modalImage && (
              <Modal
                src={modalImage}
                alt={contentAs.alt}
                onClose={closeModal} // Закрытие модалки
              />
            )}
          </>
        );

      // Обработка списка с текстом
      case "textList":
        return (
          <div>
            {typeof contentAs.text === "string" ? (
              <p>{contentAs.text}</p> // Текст перед списком
            ) : (
              <p
                dangerouslySetInnerHTML={{ __html: contentAs.text as string }}
              />
            )}
            <ul>
              {contentAs.listItems.map((item, index) => (
                <li key={index}>{item}</li> // Элементы списка
              ))}
            </ul>
          </div>
        );

      // Обработка текста с заголовком
      case "textTitleText":
        return (
          <div className={styles.TextTitleText}>
            <div>
              <h3 className={styles.TextTitleText__Title}>{contentAs.title}</h3>{" "}
              {/* Заголовок */}
              {typeof contentAs.text === "string" ? (
                <p
                  className={styles.TextTitleText__Text}
                  dangerouslySetInnerHTML={{ __html: contentAs.text as string }}
                ></p> // Основной текст
              ) : (
                <p
                  className={styles.TextTitleText__Text}
                  dangerouslySetInnerHTML={{ __html: contentAs.text as string }}
                />
              )}
            </div>
            {contentAs.additionalText && // Дополнительный текст, если есть
              (typeof contentAs.additionalText === "string" ? (
                <p className={styles.TextTitleText__MainText}>
                  {contentAs.additionalText}
                </p>
              ) : (
                <p
                  className={styles.TextTitleText__MainText}
                  dangerouslySetInnerHTML={{
                    __html: contentAs.additionalText as string,
                  }}
                />
              ))}
          </div>
        );

      // Обработка заголовка с текстом
      case "titleText":
        return (
          <div className={styles.TitleText}>
            <h2 className={styles.TextTitleText__Title}>{contentAs.title}</h2>
            {typeof contentAs.text === "string" ? (
              <p
                className={styles.TextTitleText__MainText}
                dangerouslySetInnerHTML={{ __html: contentAs.text }}
              />
            ) : (
              <p className={styles.TextTitleText__MainText}>{contentAs.text}</p>
            )}
          </div>
        );

      // Обработка списка с дополнительным текстом
      case "textListText":
        return (
          <div className={styles.TextListText}>
            <div className={styles.TextListText__ListWrapper}>
              {typeof contentAs.text === "string" ? (
                <p className={styles.TextListText__Text}>{contentAs.text}</p> // Основной текст
              ) : (
                <p
                  className={styles.TextListText__Text}
                  dangerouslySetInnerHTML={{ __html: contentAs.text as string }}
                />
              )}
              <ul className={styles.TextListText__List}>
                {contentAs.listItems.map((item, index) => (
                  <li className={styles.TextListText__List__Item} key={index}>
                    {item}
                  </li> // Элементы списка
                ))}
              </ul>
            </div>
            {typeof contentAs.additionalText === "string" ? (
              <p className={styles.TextListText__MainText}>
                {contentAs.additionalText}
              </p> // Дополнительный текст
            ) : (
              <p
                className={styles.TextListText__MainText}
                dangerouslySetInnerHTML={{
                  __html: contentAs.additionalText as string,
                }}
              />
            )}
          </div>
        );

      case "video":
        return (
          <video
            className={styles.video}
            src={contentAs.src}
            muted
            loop
            autoPlay
            playsInline
            webkit-playsinline="true"
          />
        );

      case "fullText":
        return (
          <p
            className={styles.FullText}
            dangerouslySetInnerHTML={{
              __html: contentAs.text as string,
            }}
          />
        );

      // Если тип не найден, вернуть null
      default:
        return null;
    }
  }

  return null;
};
