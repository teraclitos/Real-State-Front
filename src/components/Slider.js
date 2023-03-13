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

let cubeBG = [];
let cubeLetter = [];

const Slider = ({ highlight, setLoader }) => {
  useEffect(() => {
    cubeBG = document.querySelectorAll(".overlayed-cube");

    cubeLetter = document.querySelectorAll(".overlayed-letter-cube");
  }, []);

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
              onMouseEnter={() => {
                cubeBG[i].classList.add("overlayed-cube-hover");
                cubeLetter[i].classList.add("overlayed-letter-cube-hover");
              }}
              onMouseLeave={() => {
                cubeBG[i].classList.remove("overlayed-cube-hover");
                cubeLetter[i].classList.remove("overlayed-letter-cube-hover");
              }}
              to={`/propiedades/${element._id}`}
              className="link   "
            >
              <img src={element.images_URL[0].url} />
            </Link>
            <div className="overlayed-cube "></div>
            <div className="d-flex justify-content-center ps-3 fs-5 flex-column gross-letter overlayed-letter-cube">
              <div className="mb-2">{`Propiedad: ${element.name}`}</div>
              <div className="mb-2">{`Precio: US$ ${element.price}`}</div>
              <div className="">{`Localidad: ${element.location}`}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Slider;
