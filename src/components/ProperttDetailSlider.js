import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/all.css";
import PropertyDetailHeader from "./PropertyDetailHeader";

import { Navigation, Pagination } from "swiper";

const ProperttDetailSlider = ({ dataDetails }) => {
  let prevSlider = "";
  let nextSlider = "";

  const [width, setWidth] = useState(window.innerWidth);
  const imgSize = () => {
    if (width >= 500 && width < 768) {
      return `${400}px`;
    } else if (width < 500) {
      return `${width - 50}px`;
    } else {
      return `${500}px`;
    }
  };

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const [sizeIMG, setSizeIMG] = useState();

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setSizeIMG(imgSize);
  }, [width]);

  useEffect(() => {
    nextSlider = document.querySelector(".swiper-button-next");
    prevSlider = document.querySelector(".swiper-button-prev");

    prevSlider.classList.add("prev-normal");
    nextSlider.classList.add("next-normal");
  }, []);
  return (
    <div className=" container">
      <PropertyDetailHeader dataDetails={dataDetails} />
      <Swiper
        pagination={true}
        loop={true}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper swiper-normal pb-sm-5 pb-0 pt-0 pt-sm-5 "
      >
        {dataDetails.images_URL.map((d, i) => (
          <SwiperSlide
            key={"slidenormal" + i}
            className="mb-2 col-12 col-md-6 col-lg-4 d-flex justify-content-center  swiper-slide-normal"
          >
            {dataDetails.images_URL.length > 1 && (
              <>
                <div className="shadow-left"></div>
                <div className="shadow-right"></div>
                <div className="shadow-bottom"></div>
              </>
            )}

            <img
              style={{ height: sizeIMG, width: sizeIMG }}
              className="swiper-slide-img-normal"
              src={d.url}
              alt={`${d.name} detalle`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProperttDetailSlider;
