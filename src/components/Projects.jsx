import '../css/projects.css'

// eslint-disable-next-line no-unused-vars
import SwiperCore, { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import BTM1 from '../css/images/BTM1.png'
import BTM2 from '../css/images/BTM2.png'
import BTM3 from '../css/images/BTM3.png'

import JHC1 from '../css/images/JHC1.png'
import JHC2 from '../css/images/JHC2.png'
import JHC3 from '../css/images/JHC3.png'

function Projects() {

  return (
    <>
      <div className="projects-page-container" id='projects'>
          <div className="projects-title">
              Projects
          </div>
          <div className="project-description">
              Here are some of the projects I worked on:
          </div>
          
          <Swiper navigation={true} modules={[Navigation, Pagination]} className="mySwiper">
            <SwiperSlide><img src={BTM1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={BTM2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={BTM3} alt="" /></SwiperSlide>
          </Swiper>

          <a href="http://www.bruneltalentmarketplace.com/" className="link">Brunel Talent Marketplace</a>

          <Swiper navigation={true} modules={[Navigation, Pagination]} className="mySwiper">
            <SwiperSlide><img src={JHC1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={JHC2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={JHC3} alt="" /></SwiperSlide>
          </Swiper>

          <a href="http://www.janahealthcare.co.uk/" className="link">Jana Healthcare</a>
      </div>
    </>
  )
}

export default Projects
