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

export default function CardList({ cards }: { cards: Card[] }) {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={2}
        slidesOffsetAfter={70}
        slidesOffsetBefore={70}
        speed={800}
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
}
