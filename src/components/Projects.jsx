import "../css/projects.css";
import BTMAddress from "../css/images/BTMAddress.png";
import JHCAddress from "../css/images/JHCAddress.png";
import HealioAddress from "../css/images/HealioAddress.png";
import HecoCostAddress from "../css/images/HecoCostAddress.png";
import HecoCalcAddress from "../css/images/HecoCalcAddress.png";
import AlMadaniAddress from "../css/images/AlMadaniAddress.png";
import Medal from "../css/images/Medal.png";

function Projects() {
  return (
    <>
      <div className="projects-page-container" id="projects">
        <div className="projects-title">Projects</div>
        <div className="projects-container">
          <div className="project-container">
            <div className="project one">
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
            <div className="project two">
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
            </div>
          </div>
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
            </div>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
