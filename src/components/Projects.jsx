import "../css/projects.css";

// eslint-disable-next-line no-unused-vars
import SwiperCore, { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import BTM1 from "../css/images/BTM1.png";
import BTM2 from "../css/images/BTM2.png";
import BTM3 from "../css/images/BTM3.png";

import JHC1 from "../css/images/JHC1.png";
import JHC2 from "../css/images/JHC2.png";
import JHC3 from "../css/images/JHC3.png";
import JHC4 from "../css/images/JHC4.png";

import Healio1 from "../css/images/Healio1.png";
import Healio2 from "../css/images/Healio2.png";
import Healio3 from "../css/images/Healio3.png";
import Healio4 from "../css/images/Healio4.png";
import Healio5 from "../css/images/Healio5.png";
import Healio6 from "../css/images/Healio6.png";
import Healio7 from "../css/images/Healio7.png";

import HecoCost1 from "../css/images/HecoCost1.png";
import HecoCost2 from "../css/images/HecoCost2.png";
import HecoCost3 from "../css/images/HecoCost3.png";
import HecoCost4 from "../css/images/HecoCost4.png";
import HecoCost5 from "../css/images/HecoCost5.png";
import HecoCost6 from "../css/images/HecoCost6.png";

function Projects() {
  return (
    <>
      <div className="projects-page-container" id="projects">
        <div className="projects-title">Projects</div>
        <div className="project-description">
          Here are some of the projects I worked on:
        </div>

        <div className="link one">Healio</div>
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Healio1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Healio2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Healio3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Healio4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Healio5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Healio6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Healio7} alt="" />
          </SwiperSlide>
        </Swiper>

        <div className="link">HecoCost</div>
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={HecoCost1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={HecoCost2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={HecoCost3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={HecoCost4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={HecoCost5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={HecoCost6} alt="" />
          </SwiperSlide>
        </Swiper>

        <div className="link">Brunel Talent Marketplace</div>
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={BTM1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BTM2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BTM3} alt="" />
          </SwiperSlide>
        </Swiper>

        <div className="link">Jana Healthcare</div>
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={JHC1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={JHC2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={JHC3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={JHC4} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Projects;
