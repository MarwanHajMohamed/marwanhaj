import "../css/projects.css";

// eslint-disable-next-line no-unused-vars
import SwiperCore, { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import BTMLogo from "../css/images/BTM Logo.png";
import BTM1 from "../css/images/BTM1.png";
import BTM2 from "../css/images/BTM2.png";
import BTM3 from "../css/images/BTM3.png";

import JHCLogo from "../css/images/JHC Logo.png";
import JHC1 from "../css/images/JHC1.png";
import JHC2 from "../css/images/JHC2.png";
import JHC3 from "../css/images/JHC3.png";
import JHC4 from "../css/images/JHC4.png";

import HealioLogo from "../css/images/Healio Logo.png";
import Healio1 from "../css/images/Healio1.png";
import Healio2 from "../css/images/Healio2.png";
import Healio3 from "../css/images/Healio3.png";
import Healio4 from "../css/images/Healio4.png";
import Healio5 from "../css/images/Healio5.png";
import Healio6 from "../css/images/Healio6.png";
import Healio7 from "../css/images/Healio7.png";

import HecoLogo from "../css/images/Heco Logo.png";
import HecoCost1 from "../css/images/HecoCost1.png";
import HecoCost2 from "../css/images/HecoCost2.png";
import HecoCost3 from "../css/images/HecoCost3.png";
import HecoCost4 from "../css/images/HecoCost4.png";
import HecoCost5 from "../css/images/HecoCost5.png";
import HecoCost6 from "../css/images/HecoCost6.png";

import AlMadaniLogo from "../css/images/Al Madani Logo.png";
import AlMadani1 from "../css/images/AlMadani1.png";
import AlMadani2 from "../css/images/AlMadani2.png";
import AlMadani3 from "../css/images/AlMadani3.png";
import AlMadani4 from "../css/images/AlMadani4.png";
import AlMadani5 from "../css/images/AlMadani5.png";
import AlMadani6 from "../css/images/AlMadani6.png";
import AlMadani7 from "../css/images/AlMadani7.png";
import AlMadani8 from "../css/images/AlMadani8.png";

function Projects() {
  return (
    <div className="projects-page-container" id="projects">
      <div className="projects-title">Projects</div>
      <div className="project-description">
        Here are some of the projects I worked on:
      </div>
      <div className="projects-container">
        <div className="project">
          <img src={HealioLogo} />
          <div className="title">Healio</div>
          <div className="overlay">View Project</div>
        </div>
        <div className="project">
          <img src={BTMLogo} />
          <div className="title">BTM</div>
          <div className="overlay">View Project</div>
        </div>
        <div className="project">
          <img src={JHCLogo} />
          <div className="title">Jana Healthcare</div>
          <div className="overlay">View Project</div>
        </div>
        <div className="project">
          <img src={HecoLogo} />
          <div className="title">HecoCalc</div>
          <div className="overlay">View Project</div>
        </div>
        <div className="project">
          <img src={HecoLogo} />
          <div className="title">HecoCost</div>
          <div className="overlay">View Project</div>
        </div>
        <div className="project">
          <img src={AlMadaniLogo} />
          <div className="title">Al Madani</div>
          <div className="overlay">View Project</div>
        </div>
      </div>
      {/* <div className="link one">Healio</div>
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

        <div className="link">Al Madani</div>
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper app"
          slidesPerGroup={2}
        >
          <SwiperSlide>
            <img src={AlMadani1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={AlMadani2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={AlMadani3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={AlMadani4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={AlMadani5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={AlMadani6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={AlMadani7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={AlMadani8} alt="" />
          </SwiperSlide>
        </Swiper> */}
    </div>
  );
}

export default Projects;
