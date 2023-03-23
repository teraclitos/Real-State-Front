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
let paginationCube = "";

const Slider = ({ highlight, setLoader }) => {
  useEffect(() => {
    cubeBG = document.querySelectorAll(".overlayed-cube");

    cubeLetter = document.querySelectorAll(".overlayed-letter-cube");
    paginationCube = document.querySelector(".swiper-pagination");

    paginationCube.classList.add("pagination-cube");
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
        pagination={true}
        navigation={true}
        modules={[EffectCube, Pagination, Navigation]}
        className="mySwiper"
      >
        {highlight.map((element, i) => (
          <SwiperSlide key={"slidercube" + i}>
            <div className="d-flex highlight-container-responsive-data justify-content-center px-3  light-grey flex-column title-cube-span  py-3 d-flex d-md-none">
              <div className="mb-2">
                <span className="title-cube-span ">Propiedad:</span>
                <span className="text-cube-span"> {`  ${element.name}`}</span>
              </div>
              <div className="mb-2">
                <span className="title-cube-span ">Precio:</span>
                <span className="text-cube-span">{`  US$ ${element.price}`}</span>
              </div>
              <div className="text-cube-span">
                <span className="title-cube-span ">Localidad:</span>
                <span className="text-cube-span">
                  {`  ${element.location}`}
                </span>
              </div>
            </div>
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
              <img
                alt={`${element.name} destacado`}
                src={element.images_URL[0].url}
              />
            </Link>
            <div className="overlayed-cube d-none d-md-block"></div>
            <div className="d-flex justify-content-center  ps-3 fs-5 flex-column overlayed-letter-cube d-none d-md-flex">
              <div className="mb-2">
                <span className="title-cube-span ">Propiedad:</span>
                <span className="text-cube-span"> {`  ${element.name}`}</span>
              </div>
              <div className="mb-2">
                <span className="title-cube-span ">Precio:</span>
                <span className="text-cube-span">{`  US$ ${element.price}`}</span>
              </div>
              <div className="text-cube-span">
                <span className="title-cube-span ">Localidad:</span>
                <span className="text-cube-span">
                  {`  ${element.location}`}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Slider;
