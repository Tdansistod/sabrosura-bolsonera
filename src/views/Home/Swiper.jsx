import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiperCustomStyles.css";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function SwiperCustom({ food }) {
  const trimmed = food.substring(0, 5);
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      autoplay={true}
      navigation={true}
      loop={{ delay: 5000 }}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src={require(`./images/${trimmed}.jpg`)}
          alt={`Sabrosuras Bolsoneras, ${food}`}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={require(`./images/${trimmed}2.jpg`)}
          alt={`Sabrosuras Bolsoneras, ${food}`}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={require(`./images/${trimmed}3.jpg`)}
          alt={`Sabrosuras Bolsoneras, ${food}`}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={require(`./images/${trimmed}4.jpg`)}
          alt={`Sabrosuras Bolsoneras, ${food}`}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={require(`./images/${trimmed}5.jpg`)}
          alt={`Sabrosuras Bolsoneras, ${food}`}
        />
      </SwiperSlide>
    </Swiper>
  );
}
