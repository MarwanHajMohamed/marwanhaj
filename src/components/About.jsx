import React from "react";
import "../css/about.css";

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="wrapper">
        <div className="about-title">My name is Marwan Haj Mohamed</div>
        <div className="description-container">
          <div className="description">
            <div>
              My passion lies in building solid business solutions that drive
              real growth. Whether it's a website that elevates brand visibility
              or a custom software tool that replaces tedious manual tasks, I
              love helping brands go from where they are to where they dream to
              be, and then pushing even further through continuous improvement.
            </div>
            <br />
            <div>
              Since writing my first lines of code back in high school in 2016,
              I’ve been on a journey of continuous growth, sharpening my
              development skills, exploring UI/UX design, and consistently
              taking on more complex challenges to keep levelling up.
            </div>
            <br />
            <div>
              Every project brings something new, and I treat each one as a
              chance to grow and deliver something meaningful. My goal is always
              to give my best and create solutions that businesses are genuinely
              proud to own.
            </div>
          </div>
          <div className="skills">
            <div className="section">
              <div className="title">Languages</div>
              <div>
                HTML, JavaScript, React, TypeScript, Python, Java, Express,
                Node.js, SpringBoot, RESTful APIs, Context API
              </div>
            </div>
            <div className="section">
              <div className="title">Tools/Databases</div>
              <div>
                Git, GitHub, MongoDB, Jira, Figma, AWS (S3, Cognito), Slack,
                MySQL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
