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

import Medal from "../css/images/Medal.png";

import Modal from "./commonStructures/Modal";

// eslint-disable-next-line no-unused-vars
import SwiperCore, { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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

  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");

  const setModalDetails = (title, images, type) => {
    setOpen(true);
    setTitle(title);
    setImages(images);
    setType(type);
  };

  return (
    <>
      <Modal
        title={title}
        images={images}
        type={type}
        open={open}
        setOpen={setOpen}
      />
      <div className="projects-page-container" id="projects">
        <div className="projects-title">Projects</div>
        <div className="projects-container">
          <div className="project-container">
            <div
              className="project one"
              onClick={() => setModalDetails("Healio", HealioImages, "website")}
            >
              <div className="project-title">
                <img className="medal" src={Medal} alt="" />
                <div className="title">Healio</div>
                <div className="title-description">
                  Your personal AI helthcare assistant
                </div>
              </div>
              <div className="project-image">
                <img src={HealioAddress} alt="" />
              </div>
            </div>
            <div
              className="project two"
              onClick={() => setModalDetails("AlMadani", AlMadaniImages, "app")}
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
            </div>
          </div>
          <div className="project-container two">
            <div
              className="project three"
              onClick={() => setModalDetails("BTM", BTMImages, "website")}
            >
              <div className="project-title">
                <div className="title">BTM</div>
                <div className="title-description">
                  Non-profit consultancy for Brunel University
                </div>
              </div>
              <div className="project-image">
                <img src={BTMAddress} alt="" />
              </div>
            </div>
            <div
              className="project four"
              onClick={() => setModalDetails("JHC", JHCImages, "website")}
            >
              <div className="project-title">
                <div className="title">JHC</div>
                <div className="title-description">
                  A dermatology clinic portfolio
                </div>
              </div>
              <div className="project-image">
                <img src={JHCAddress} alt="" />
              </div>
            </div>
          </div>
          <div className="project-container three">
            <div
              className="project five"
              onClick={() => setModalDetails("HecoCalc", HecoImages, "website")}
            >
              <div className="project-title">
                <div className="title">HecoCalc</div>
                <div className="title-description">
                  A web-based health economics calculator
                </div>
              </div>
              <div className="project-image">
                <img src={HecoCalcAddress} alt="" />
              </div>
            </div>
            <div
              className="project six"
              onClick={() => setModalDetails("HecoCost", HecoImages, "website")}
            >
              <div className="project-title">
                <div className="title">HecoCost</div>
                <div className="title-description">
                  A budget impact modelling platform
                </div>
              </div>
              <div className="project-image">
                <img src={HecoCostAddress} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
