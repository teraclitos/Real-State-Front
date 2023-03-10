import React, { useRef, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCube, Pagination, Navigation } from "swiper";
import "../styles/all.css";

const Slider = ({ highlight, setLoader }) => {
  return (
    <Container className=" d-flex justify-content-center cube-container flex-column">
      <h3 className=" d-flex justify-content-center cube-title ">
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
        {highlight.map((element, i) => (
          <SwiperSlide key={"slidercube" + i}>
            <Link
              onClick={() => {
                setLoader(true);
              }}
              to={`/propiedades/${element._id}`}
              className="link   "
            >
              <img src={element.images_URL[0].url} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Slider;
