import "../../css/modal.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const Modal = ({ project, onClose }) => {
  if (!project) return null;

  const items = project.images.map((image, index) => (
    <div className="carousel-item">
      <img
        key={index}
        src={image}
        className={
          project.type === "desktop" ? "desktop-image" : "mobile-image"
        }
        onDragStart={(e) => e.preventDefault()}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  ));

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="content">
          <button className="close-button" onClick={onClose}>
            X
          </button>
          {project.images.length !== 0 && (
            <AliceCarousel
              items={items}
              mouseTracking
              renderPrevButton={({ isDisabled }) => (
                <button
                  className={`custom-arrow left ${
                    isDisabled ? "disabled" : ""
                  }`}
                  disabled={isDisabled}
                >
                  &lt;
                </button>
              )}
              renderNextButton={({ isDisabled }) => (
                <button
                  className={`custom-arrow right ${
                    isDisabled ? "disabled" : ""
                  }`}
                  disabled={isDisabled}
                >
                  &gt;
                </button>
              )}
            />
          )}
          <div className="project-title">{project.title}</div>
          <div className="project-name">{project.name}</div>
          <div className="date">{project.date}</div>
          <div className="skills">
            {project.skills.map((skill, i) => (
              <span className="skill" key={i}>
                {skill}
              </span>
            ))}
          </div>
          <div className="project-paragraphs">
            {project.paragraphs.map((par, i) => (
              <div key={i}>
                <div>{par}</div>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
