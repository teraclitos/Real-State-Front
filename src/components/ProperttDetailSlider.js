import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/all.css";

import { Navigation, Pagination } from "swiper";

const ProperttDetailSlider = ({ dataDetails }) => {
  let prevSlider = "";
  let nextSlider = "";

  useEffect(() => {
    nextSlider = document.querySelector(".swiper-button-next");
    prevSlider = document.querySelector(".swiper-button-prev");
    prevSlider.classList.add("prev-normal");
    nextSlider.classList.add("next-normal");
  }, []);
  return (
    <Swiper
      pagination={true}
      loop={true}
      navigation={true}
      modules={[Navigation, Pagination]}
      className="mySwiper swiper-normal py-5"
    >
      {dataDetails.images_URL.map((d, i) => (
        <SwiperSlide
          key={"slidenorma" + i}
          className="mb-2 col-12 col-md-6 col-lg-4 d-flex justify-content-center "
        >
          <img className="swiper-slide-img-normal" src={d.url} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProperttDetailSlider;
