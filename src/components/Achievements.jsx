import React from "react";
import "../css/achievements.css";
import MiB from "../css/images/MiB.jpg";

export default function Achievements() {
  return (
    <div className="achievements-page-container">
      <div className="wrapper">
        <div className="title">Made in Brunel</div>
        <div className="achievements-container">
          <div className="achievement">
            <div className="image-container">
              <img src={MiB} alt="" />
            </div>
            <div className="description">
              <span style={{ fontWeight: 700 }}>Made in Brunel </span>
              is a prestigious annual showcase at Brunel University where
              students from all years present their projects to a panel of
              judges and a public audience.
              <br />
              <br />
              To win, participants must effectively communicate and demonstrate
              their work through both a live presentation and display.
              <br />
              <br />I presented my final year project, Healio, to over 100
              attendees and a panel of judges, highlighting its technical depth,
              design, and impact.
              <br />
              <br />
              My presentation impressed the judges and earned me the Winner’s
              Certificate, awarded alongside my degree.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
