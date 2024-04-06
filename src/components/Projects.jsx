import "../css/projects.css";

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
import ProjectModal from "./commonStructures/ProjectModal";
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

  const [openHealio, setOpenHealio] = useState(false);
  const handleOpenHealio = () => setOpenHealio(true);
  const handleCloseHealio = () => setOpenHealio(false);

  const [openBTM, setOpenBTM] = useState(false);
  const handleOpenBTM = () => setOpenBTM(true);
  const handleCloseBTM = () => setOpenBTM(false);

  const [openJHC, setOpenJHC] = useState(false);
  const handleOpenJHC = () => setOpenJHC(true);
  const handleCloseJHC = () => setOpenJHC(false);

  const [openCalc, setOpenCalc] = useState(false);
  const handleOpenCalc = () => setOpenCalc(true);
  const handleCloseCalc = () => setOpenCalc(false);

  const [openCost, setOpenCost] = useState(false);
  const handleOpenCost = () => setOpenCost(true);
  const handleCloseCost = () => setOpenCost(false);

  const [openMadani, setOpenMadani] = useState(false);
  const handleOpenMadani = () => setOpenMadani(true);
  const handleCloseMadani = () => setOpenMadani(false);

  return (
    <div className="projects-page-container" id="projects">
      <div className="projects-title">Projects</div>
      <div className="project-description">
        Here are some of the projects I worked on:
      </div>
      <div className="projects-container">
        <div className="project" onClick={handleOpenHealio}>
          <img src={HealioLogo} alt="" />
          <div className="title">Healio</div>
          <div className="overlay">View Project</div>
        </div>
        <ProjectModal
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
        />
        <div className="project" onClick={handleOpenBTM}>
          <img src={BTMLogo} alt="" />
          <div className="title">BTM</div>
          <div className="overlay">View Project</div>
        </div>
        <ProjectModal
          title="BTM"
          images={BTMImages}
          description="BTM is a non-profit division at Brunel University dedicated to empowering SMEs
          and Startups through their expertise in IT solutions. Their mission is to deliver IT services at
          affordable prices guided by experts and fuelled by talented students. BTM was developed using
          ReactJs to build the frontend, and was the first ReactJs project that I worked on."
          open={openBTM}
          handleClose={handleCloseBTM}
        />
        <div className="project" onClick={handleOpenJHC}>
          <img src={JHCLogo} alt="" />
          <div className="title">Jana Healthcare</div>
          <div className="overlay">View Project</div>
        </div>
        <ProjectModal
          title="JHC"
          images={JHCImages}
          description="Jana Healthcare is a dermatology clinic which aims to provide the highest quality
          clinical treatments including dermal fillers, hair treatment, acne treatment and wrinkle
          treatment. This project was developed using ReactJs frontend and SpringBoot backend. Developing
          JHC further enhanced my skills in developing a full stack application, combining filling forms
          in the frontend and storing data in the database through SpringBoot and MySQL."
          open={openJHC}
          handleClose={handleCloseJHC}
        />
        <div className="project" onClick={handleOpenCalc}>
          <img src={HecoLogo} alt="" />
          <div className="title">HecoCalc</div>
          <div className="overlay">View Project</div>
        </div>
        <ProjectModal
          title="HecoCalc"
          images={HecoImages}
          description="HecoCalc"
          open={openCalc}
          handleClose={handleCloseCalc}
        />
        <div className="project" onClick={handleOpenCost}>
          <img src={HecoLogo} alt="" />
          <div className="title">HecoCost</div>
          <div className="overlay">View Project</div>
        </div>
        <ProjectModal
          title="HecoCost"
          images={HecoImages}
          description="HecoCost"
          open={openCost}
          handleClose={handleCloseCost}
        />
        <div className="project" onClick={handleOpenMadani}>
          <img src={AlMadaniLogo} alt="" />
          <div className="title">Al Madani</div>
          <div className="overlay">View Project</div>
        </div>
        <ProjectModal
          title="Al Madani"
          images={AlMadaniImages}
          description="AlMadani"
          open={openMadani}
          handleClose={handleCloseMadani}
        />
      </div>
    </div>
  );
}

export default Projects;
