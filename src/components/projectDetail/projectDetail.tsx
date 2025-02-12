import Image from "next/image";
import styles from "./projectDetail.module.scss";

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
  | { type: "video"; src: string; poster?: string };

// Компонент ProjectDetail, который принимает контент и рендерит его
type ProjectDetailProps = {
  content: unknown; // Используем unknown для более гибкой проверки типов
};

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ content }) => {
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
          <Image
            className={styles.image} // Стили для изображения
            src={contentAs.src}
            alt={contentAs.alt}
            width={1000}
            height={1000}
          />
        );

      case "halfScreenImage":
        return (
          <Image
            className={styles.ImageHalfScreen} // Стили для изображения на пол экрана
            src={contentAs.src}
            alt={contentAs.alt}
            width={960}
            height={540}
          />
        );

      // Обработка изображения с текстом
      case "imageText":
        return (
          <div className={styles.ImageText}>
            <Image
              src={contentAs.src}
              alt={contentAs.alt}
              width={1000}
              height={1000}
              className={styles.image} // Стили для изображения
            />
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
          <Image
            src={contentAs.src}
            alt={contentAs.alt}
            width={1920}
            height={1200}
            className={styles.imageFull} // Стили для изображения на весь экран
          />
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
                <p className={styles.TextTitleText__Text}>{contentAs.text}</p> // Основной текст
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
          <div>
            <h2>{contentAs.title}</h2> {/* Заголовок */}
            {typeof contentAs.text === "string" ? (
              <p>{contentAs.text}</p> // Текст под заголовком
            ) : (
              <p
                dangerouslySetInnerHTML={{ __html: contentAs.text as string }}
              />
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
            loop
            autoPlay
            playsInline
            webkit-playsinline="true"
          />
        );

      // Если тип не найден, вернуть null
      default:
        return null;
    }
  }
  return null;
};
