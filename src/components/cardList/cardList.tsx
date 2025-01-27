"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Импорт стилей Swiper для слайдера
import styles from "./cardList.module.scss"; // Подключаем стили для слайдера
import Card from "../card/card";

type Card = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

type CardListProps = {
  cards: Card[];
};

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        autoplay={{
          delay: 1000, // Задержка между слайдами
          disableOnInteraction: false, // Автопрокрутка продолжается, даже если пользователь взаимодействует
        }}
        loop={true} // Зацикливание слайдов
        spaceBetween={30} // Расстояние между слайдами
        slidesPerView={2} // Количество слайдов, показываемых на экране
        slidesOffsetAfter={70} // Смещение слайда после
        slidesOffsetBefore={70} // Смещение слайда до
        speed={800} // Скорость анимации
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              link={card.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardList;
