import React from "react";
import styles from "./MyCarousel.module.scss";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { DATA } from "../../data";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MyCarousel = ({ photos }) => {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        effect={"fade"}
        speed={800}
        slidesPerView={1}
        loop
        className={styles.myswiper}
      >
        {photos.photos.map((photo, index) => (
          <SwiperSlide key={photo} className={styles.swiperslide}>
            <div className={styles.imgcontainer}>
              <img src={photo} alt="" />
              <div className={styles.text}>{index + 1}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MyCarousel;
