import "../css/projects.css";
import Medal from "../css/images/Medal.png";
import { useNavigate } from "react-router-dom";

import projects from "../Data/projects.json";

function Projects() {
  const navigate = useNavigate();

  return (
    <>
      <div className="projects-page-container" id="projects">
        <div className="projects-title">Projects</div>
        <div className="projects-container">
          {projects.map((project) => {
            return (
              <div className="project-container">
                <div
                  className={`project ${project.title}`}
                  onClick={() => navigate(`/project/${project.title}`)}
                >
                  <div className="project-title">
                    <img
                      className={`medal ${project.title}`}
                      src={Medal}
                      alt=""
                    />
                    <div className="title">{project.title}</div>
                    <div className="title-description">{project.subtitle}</div>
                  </div>
                  <div className="project-image">
                    <img src={project.image_displayed} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
