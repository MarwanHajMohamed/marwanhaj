import "../css/projects.css";

import BTMAddress from "../css/images/BTMAddress.png";
import BTM1 from "../css/images/BTM1.png";
import BTM2 from "../css/images/BTM2.png";
import BTM3 from "../css/images/BTM3.png";

import JHCAddress from "../css/images/JHCAddress.png";
import JHC1 from "../css/images/JHC1.png";
import JHC2 from "../css/images/JHC2.png";
import JHC3 from "../css/images/JHC3.png";
import JHC4 from "../css/images/JHC4.png";

import HealioAddress from "../css/images/HealioAddress.png";
import Healio1 from "../css/images/Healio1.png";
import Healio2 from "../css/images/Healio2.png";
import Healio3 from "../css/images/Healio3.png";
import Healio4 from "../css/images/Healio4.png";
import Healio5 from "../css/images/Healio5.png";
import Healio6 from "../css/images/Healio6.png";
import Healio7 from "../css/images/Healio7.png";

import HecoCostAddress from "../css/images/HecoCostAddress.png";
import HecoCost1 from "../css/images/HecoCost1.png";
import HecoCost2 from "../css/images/HecoCost2.png";
import HecoCost3 from "../css/images/HecoCost3.png";
import HecoCost4 from "../css/images/HecoCost4.png";
import HecoCost5 from "../css/images/HecoCost5.png";
import HecoCost6 from "../css/images/HecoCost6.png";

import HecoCalcAddress from "../css/images/HecoCalcAddress.png";

import AlMadaniAddress from "../css/images/AlMadaniAddress.png";
import AlMadani1 from "../css/images/AlMadani1.png";
import AlMadani2 from "../css/images/AlMadani2.png";
import AlMadani3 from "../css/images/AlMadani3.png";
import AlMadani4 from "../css/images/AlMadani4.png";
import AlMadani5 from "../css/images/AlMadani5.png";
import AlMadani6 from "../css/images/AlMadani6.png";
import AlMadani7 from "../css/images/AlMadani7.png";
import AlMadani8 from "../css/images/AlMadani8.png";

import Modal from "./commonStructures/Modal";

// eslint-disable-next-line no-unused-vars
import SwiperCore, { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { useState } from "react";

function Projects() {
  const BTMImages = [BTM1, BTM2, BTM3];

  const JHCImages = [JHC1, JHC2, JHC3, JHC4];

  const HealioImages = [
    Healio1,
    Healio2,
    Healio3,
    Healio4,
    Healio5,
    Healio6,
    Healio7,
  ];

  const HecoImages = [
    HecoCost1,
    HecoCost2,
    HecoCost3,
    HecoCost4,
    HecoCost5,
    HecoCost6,
  ];

  const AlMadaniImages = [
    AlMadani1,
    AlMadani2,
    AlMadani3,
    AlMadani4,
    AlMadani5,
    AlMadani6,
    AlMadani7,
    AlMadani8,
  ];

  const [title, setTitle] = useState("Test");
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");

  const [open, setOpen] = useState(false);

  const setModalDetails = (title, images, description) => {
    setOpen(true);
    setTitle(title);
    setImages(images);
    setDescription(description);
  };

  return (
    <>
      <Modal
        title={title}
        images={images}
        description={description}
        open={open}
        setOpen={setOpen}
      />
      <div className="projects-page-container" id="projects">
        <div className="projects-title">Projects</div>
        <div className="projects-container">
          <div className="project-container">
            <div
              className="project one"
              onClick={() => setModalDetails("Healio", HealioImages)}
            >
              <div className="project-title">
                <div className="title">Healio</div>
                <div className="title-description">
                  Your personal AI helthcare assistant
                </div>
              </div>
              <div className="project-image">
                <img src={HealioAddress} alt="" />
              </div>

              {/* <div className="project-description">
            <Swiper
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper"
            >
              {HealioImages.map((image) => {
                return (
                  <SwiperSlide>
                    <img src={image} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div> */}
              {/* <div className="description">
              Healio is an AI healthcare chatbot that aims to deliver free
              consultancy to patients with minor symptoms by providing
              diagnosis, medical treatment, and description of the diagnosis
              that it provided. It uses a custom developed model which was
              trained on extensive data containing diseases and their symptoms
              to be able to provide consultancy to users based on their
              symptoms. Healio was trained using a Random Forest Classifier, and
              uses NLP techniques to understand sentences provided by users and
              extract symptoms from the input.
            </div> */}
            </div>
            {/* <ProjectModal
          title="Healio"
          images={HealioImages}
          description="Healio is an AI healthcare chatbot that aims to deliver free consultancy
          to patients with minor symptoms by providing diagnosis, medical treatment, and description
          of the diagnosis that it provided. It uses a custom developed model which was trained on
          extensive data containing diseases and their symptoms to be able to provide consultancy
          to users based on their symptoms. Healio was trained using a Random Forest Classifier,
          and uses NLP techniques to understand sentences provided by users and extract symptoms from
          the input."
          open={openHealio}
          handleClose={handleCloseHealio}
        /> */}
            <div
              className="project two"
              onClick={() => setModalDetails("AlMadani", AlMadaniImages)}
            >
              <div className="project-title">
                <div className="title">Al Madani</div>
                <div className="title-description">
                  Customer service for tenants
                </div>
              </div>
              <div className="project-image">
                <img src={AlMadaniAddress} alt="" />
              </div>
              {/* <div className="project-description">
            <Swiper
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper phone"
            >
              {AlMadaniImages.map((image) => {
                return (
                  <SwiperSlide>
                    <img src={image} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div> */}
            </div>

            {/* <ProjectModal
          title="BTM"
          images={BTMImages}
          description="BTM is a non-profit division at Brunel University dedicated to empowering SMEs
          and Startups through their expertise in IT solutions. Their mission is to deliver IT services at
          affordable prices guided by experts and fuelled by talented students. BTM was developed using
          ReactJs to build the frontend, and was the first ReactJs project that I worked on."
          open={openBTM}
          handleClose={handleCloseBTM}
        /> */}
          </div>
          <div className="project-container two">
            <div className="project three">
              <div className="project-title">
                <div className="title">BTM</div>
                <div className="title-description">
                  Non-profit consultancy for Brunel University
                </div>
              </div>
              <div className="project-image">
                <img src={BTMAddress} alt="" />
              </div>
              {/* <div className="project-description">
              <Swiper
                navigation={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
              >
                {BTMImages.map((image) => {
                  return (
                    <SwiperSlide>
                      <img src={image} alt="" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div> */}
            </div>
            <div className="project four">
              <div className="project-title">
                <div className="title">JHC</div>
                <div className="title-description">
                  A dermatology clinic portfolio
                </div>
              </div>
              <div className="project-image">
                <img src={JHCAddress} alt="" />
              </div>
              {/* <div className="project-description">
              <Swiper
                navigation={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
              >
                {JHCImages.map((image) => {
                  return (
                    <SwiperSlide>
                      <img src={image} alt="" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div> */}
            </div>
          </div>
          {/* <ProjectModal
          title="JHC"
          images={JHCImages}
          description="Jana Healthcare is a dermatology clinic which aims to provide the highest quality
          clinical treatments including dermal fillers, hair treatment, acne treatment and wrinkle
          treatment. This project was developed using ReactJs frontend and SpringBoot backend. Developing
          JHC further enhanced my skills in developing a full stack application, combining filling forms
          in the frontend and storing data in the database through SpringBoot and MySQL."
          open={openJHC}
          handleClose={handleCloseJHC}
        /> */}
          <div className="project-container three">
            <div className="project five">
              <div className="project-title">
                <div className="title">HecoCalc</div>
                <div className="title-description">
                  A web-based health economics calculator
                </div>
              </div>
              <div className="project-image">
                <img src={HecoCalcAddress} alt="" />
              </div>
              {/* <div className="project-description">
              <Swiper
                navigation={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
              >
                {HecoImages.map((image) => {
                  return (
                    <SwiperSlide>
                      <img src={image} alt="" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div> */}
            </div>
            {/* <ProjectModal
          title="HecoCalc"
          images={HecoImages}
          description="HecoCalc"
          open={openCalc}
          handleClose={handleCloseCalc}
        /> */}
            <div className="project six">
              <div className="project-title">
                <div className="title">HecoCost</div>
                <div className="title-description">
                  A budget impact modelling platform
                </div>
              </div>
              <div className="project-image">
                <img src={HecoCostAddress} alt="" />
              </div>
              {/* <div className="project-description">
              <Swiper
                navigation={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
              >
                {HecoImages.map((image) => {
                  return (
                    <SwiperSlide>
                      <img src={image} alt="" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div> */}
            </div>
          </div>
          {/* <ProjectModal
          title="HecoCost"
          images={HecoImages}
          description="HecoCost"
          open={openCost}
          handleClose={handleCloseCost}
        /> */}

          {/* <ProjectModal
          title="Al Madani"
          images={AlMadaniImages}
          description="AlMadani"
          open={openMadani}
          handleClose={handleCloseMadani}
        /> */}
        </div>
      </div>
    </>
  );
}

export default Projects;
