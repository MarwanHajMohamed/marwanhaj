import React from "react";
import "../css/achievements.css";
import MiB from "../css/images/MiB.jpg";
import MiB2 from "../css/images/MiB2.png";

export default function Achievements() {
  return (
    <div className="achievements-page-container">
      <div className="title">Achievements</div>
      <div className="achievements-container">
        <div className="achievement">
          <div className="image-container">
            <img src={MiB} alt="" />
          </div>
          <div className="description">
            <span style={{ color: "rgb(61,101,240)", fontWeight: 800 }}>
              Made in Brunel
            </span>{" "}
            is an annual competition held by Brunel University where innovators
            of all levels come together to showcase their ideas and projects and
            connect with industry professionals.
          </div>
        </div>
        <div className="achievement">
          <div className="image-container">
            <img src={MiB2} alt="" />
          </div>
          <div className="description">
            I had the opportunity to compete in 2024 and showcased
            <span style={{ fontWeight: 800 }}> Healio</span> to the judges,
            sponsors and other students. Healio impressed the judges and
            therefore led me to winning a prize in this competition.
          </div>
        </div>
      </div>
    </div>
  );
}
