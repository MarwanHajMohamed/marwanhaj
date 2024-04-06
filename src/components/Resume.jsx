import React from "react";
import "../css/resume.css";
import Mailto from "./Mailto";

import CV from "../docs/CV Online.pdf";

function Resume() {
  const onButtonClick = () => {
    const pdfUrl = CV;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-page-container" id="resume">
      <div className="resume-title">Resume</div>
      <div className="button-container">
        <button onClick={onButtonClick}>Download Resume</button>
      </div>
    </div>
  );
}

export default Resume;
