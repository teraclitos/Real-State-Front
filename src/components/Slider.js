import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCube, Pagination, Navigation } from "swiper";
import "../styles/all.css";

const Slider = () => {
  return (
    <Container className=" d-flex justify-content-center cube-container flex-column">
      <h3 className=" d-flex justify-content-center cube-title">
        Oportunidades
      </h3>
      <Swiper
        loop={true}
        effect={"cube"}
        grabCursor={false}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={false}
        navigation={true}
        modules={[EffectCube, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Slider;
