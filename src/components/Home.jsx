import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import "../css/home.css";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeCard from "./commonStructures/HomeCard";
import CV from "../docs/CV Online.pdf";

export default function Home() {
  const [emailButton, showEmailButton] = useState(false);

  const showEmailOnScroll = () => {
    if (window.scrollY >= 400) {
      showEmailButton(true);
    } else {
      showEmailButton(false);
    }
  };
  window.addEventListener("scroll", showEmailOnScroll);

  const downloadResume = () => {
    const pdfUrl = CV;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar />
      <div className="page-container" id="home">
        <div className="intro-wrapper">
          <div className="logo">MHM</div>
          <div className="title">Marwan Haj Mohamed</div>
          <div className="button-container">
            <button onClick={downloadResume}>Download Resume</button>
          </div>
        </div>

        <div className="description-wrapper">
          <div className="hc">
            <a href={"mailto:marwan.khaj@hotmail.com"}>
              <HomeCard icon="fa-solid fa-envelope" />
            </a>
          </div>

          <div className="hc">
            <a href="https://www.linkedin.com/in/marwan-haj-mohamed-305578218/">
              <HomeCard icon="fa-brands fa-linkedin" />
            </a>
          </div>

          <div className="hc">
            <a href="https://github.com/MarwanHajMohamed">
              <HomeCard icon="fa-brands fa-github" />
            </a>
          </div>
        </div>
      </div>
      <div className={emailButton ? "scrollEmail emailButton" : "scrollEmail"}>
        <a href={"mailto:marwan.khaj@hotmail.com"}>
          <HomeCard icon="fa-solid fa-envelope" />
        </a>
      </div>
    </>
  );
}
