import React, { useRef, useState, useEffect } from "react";
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

const Slider = ({ highlight, setHighlight, data }) => {
  // useEffect(() => {
  //   setHighlight(data.filter((element) => element.highlight === "YES"));
  //   console.log(highlight);
  // }, []);
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
        {data
          .filter((high) => high.highlight === "YES")
          .map((element, i) => (
            <SwiperSlide key={"slidercube" + i}>
              <img src={element.images_URL[0].url} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  );
};

export default Slider;
