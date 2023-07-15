import React from "react";
import styles from "./MyCarousel.module.scss";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";

import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const MyCarousel = () => {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation]}
        navigation
        effect
        speed={800}
        slidesPerView={1}
        loop
        className={styles.myswiper}
      >
        <SwiperSlide>
          <img
            src="https://cdn.forbes.ru/files/c/1082x683/photo_galleries/1920-02_tcm-3173-1834873.jpg__1582289253__55999.webp"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MyCarousel;
