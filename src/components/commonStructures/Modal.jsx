import React, { useEffect } from "react";
import "../../css/modal.css";

// eslint-disable-next-line no-unused-vars
import SwiperCore, { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

export default function Modal({ title, images, type, open, setOpen }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);
  return (
    <div className={open ? "modal-container open" : "modal-container closed"}>
      <div className="close-container">
        <div className="close" onClick={() => setOpen(false)}>
          <i class="fa-solid fa-circle-xmark"></i>
        </div>
      </div>
      <div className={type === "website" ? "modal website" : "modal app"}>
        <div className="title-container">
          <div className="title">{title}</div>
        </div>
        <div className="description-container">
          <div className="images-container">
            <Swiper
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper"
            >
              {images.map((image) => {
                return (
                  <SwiperSlide>
                    <img src={image} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
