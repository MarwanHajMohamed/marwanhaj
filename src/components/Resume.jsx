import React from "react";
import "../css/resume.css";
import Mailto from "./Mailto";

function Resume() {
  return (
    <div className="resume-page-container" id="resume">
      <div className="resume-title">Resume</div>

      <div className="resume-container">
        <div className="cv-title-container">
          <div className="cv-title">Marwan Haj Mohamed</div>
        </div>

        <div className="sections">
          <div className="cv-section">
            <div className="summary-section">
              <div className="summary-title">Summary</div>
              <ul className="summary">
                <li>
                  Experienced working in web technologies such as{" "}
                  <span style={{ color: "black" }}>
                    ReactJS, HTML, JavaScript
                  </span>{" "}
                  and
                  <span style={{ color: "black" }}> CSS</span> while developing{" "}
                  <span style={{ color: "black" }}>
                    {" "}
                    Brunel Talent Marketplace (BTM){" "}
                  </span>
                  Project.
                </li>
                <li>
                  Developed an airport booking system during my first year at
                  university using
                  <span style={{ color: "black" }}> Java</span>.
                </li>
                <li>
                  Basic backend knowledge using{" "}
                  <span style={{ color: "black" }}> Express</span> to connect to
                  an <span style={{ color: "black" }}>SQL database</span>.
                </li>
                <li>
                  Advanced knowledge in{" "}
                  <span style={{ color: "black" }}>Agile</span> methodology
                  whilst developing the BTM website.
                </li>
                <li>
                  Good understanding of{" "}
                  <span style={{ color: "black" }}>Waterfall</span> methodology
                  developed during the implementation of the airport system in
                  my first year.
                </li>
                <li>
                  Enhanced my{" "}
                  <span style={{ color: "black" }}>problem-solving</span> skills
                  by individually developing a personal portfolio website which
                  showcases my skills, projects and more.
                </li>
                <li>
                  Natural ability to{" "}
                  <span style={{ color: "black" }}>communicate</span> with the
                  customer through{" "}
                  <span style={{ color: "black" }}>listening</span> and
                  <span style={{ color: "black" }}> understanding</span> their
                  ideas and requirements
                </li>
                <li>
                  Demonstrated my ability to{" "}
                  <span style={{ color: "black" }}>lead</span> a team of
                  students in our university group project
                </li>
              </ul>
            </div>

            <div className="education-section">
              <div className="education-title">Education</div>
              <div className="brunel-university">
                <div className="year-2">
                  <div className="brunel-title">Brunel University Level 2</div>
                  <div className="date">(2022-2023)</div>
                  <div className="grades">Modules:</div>
                  <ul className="brunel-grades">
                    <li>Software Development and Management</li>
                    <li>Year 2 Group Project</li>
                    <li>Usability Engineering</li>
                    <li>Algorithms and their Applications</li>
                    <li>Networks and Operating Systems</li>
                  </ul>
                </div>
                <div className="year-1">
                  <div className="brunel-title">Brunel University Level 1</div>
                  <div className="date">(2021-2022)</div>
                  <div className="grades">Grades:</div>
                  <ul className="brunel-grades">
                    <li>
                      Software Design: <span>A*</span>
                    </li>
                    <li>
                      Fundamental Programming Assessment: <span>A+</span>
                    </li>
                    <li>
                      Software Implementation Event: <span>A+</span>
                    </li>
                    <li>
                      Systems and Organisations: <span>A+</span>
                    </li>
                    <li>
                      Group Project Reflection: <span>A</span>
                    </li>
                    <li>
                      Logic and Computation: <span>A</span>
                    </li>
                    <li>
                      Data and Information: <span>C-</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="albemarle-college">
                <div className="albemarle-title">
                  Albemarle Independent College
                </div>
                <div className="date">(2019-2020)</div>
                <div className="grades">Grades:</div>
                <ul className="albemarle-grades">
                  <li>
                    Arabic: <span>A</span>
                  </li>
                  <li>
                    Maths: <span>B</span>
                  </li>
                  <li>
                    Computer Science: <span>B</span>
                  </li>
                  <li>
                    Economics: <span>B</span>
                  </li>
                </ul>
              </div>
              <div className="douay-martyrs">
                <div className="douay-title">
                  Douay Martyrs Secondary School
                </div>
                <div className="date">(2013-2018)</div>
                <div className="grades">
                  11 GCSES, grades A-C including Maths, English and Triple
                  Science.
                </div>
              </div>
            </div>

            <div className="work-experience">
              <div className="relevant-work-experience-title">
                Relevant Work Experience
              </div>
              <div className="btm-section">
                <div className="rwe-title">
                  BrunelTalentMarketplace.com (BTM)
                </div>
                <div className="date">(July-September 2022)</div>
                <ul className="rwe">
                  <li>
                    I was asked to work with a team to develop the front-end
                    side of the website.
                  </li>
                  <li>
                    Brainstormed different ideas for the design of the website
                    by researching the competition and evaluating their
                    strengths and weaknesses.
                  </li>
                  <li>
                    Used ReactJS, CSS, HTML and JavaScript languages to code the
                    front-end.
                  </li>
                  <li>
                    Developed my communication skills through working in a small
                    team and understanding the customer’s requirements.
                  </li>
                  <li>
                    Improved my time-management by meeting deadlines set by the
                    customer to produce a working prototype of the website each
                    sprint.
                  </li>
                </ul>
              </div>
              <div className="jhc-section">
                <div className="rwe-title">JanaHealthCare.co.uk (JHC)</div>
                <div className="date">(December 2022-January 2023)</div>
                <ul className="rwe">
                  <li>
                    Jana Healthcare approached me to develop the frontend for
                    their website.
                  </li>
                  <li>
                    Browsed through multiple clinical websites to look for
                    design inspiration.
                  </li>
                  <li>
                    Used HTML, CSS and JavaScript as well as React framework to
                    develop the website.
                  </li>
                  <li>
                    Enhanced my JavaScript skills as this project required
                    multiple image comparison sliders which were developed using
                    JavaScript.
                  </li>
                  <li>
                    Developed my individual learning skills, as this project was
                    produced solely in a short period of time.
                  </li>
                </ul>
              </div>
            </div>

            <div className="project-work">
              <div className="portfolio-section">
                <div className="project-work-title">Project Work</div>
                <div className="portfolio-title">Marwanhaj.com</div>
                <div className="date">(September 2022)</div>
                <ul className="portfolio">
                  <li>
                    Developed a personal portfolio website to showcase my
                    projects, skills and CV.
                  </li>
                  <li>
                    Researched multiple portfolio websites to finalise a design
                    for my project.
                  </li>
                  <li>
                    Produced the final website using ReactJS, CSS, HTML and
                    JavaScript.
                  </li>
                  <li>
                    Gained more knowledge about CSS by making the website
                    mobile-friendly, responsive for any size of screen.
                  </li>
                  <li>
                    As I was working on this project independently, I improved
                    my creativity and independent work by solely researching
                    designs and ideas for the layout of the website.
                  </li>
                </ul>
              </div>

              <div className="year-1-project">
                <div className="year-1-title">
                  Year 1 Airport Simulation Project
                </div>
                <div className="date">(December 2021- April 2022)</div>
                <ul className="year-1-description">
                  <li>
                    Our group project involved planning, designing, implementing
                    and testing a fully functional airport booking system.
                  </li>
                  <li>
                    My team and I each came up with a design for the program,
                    which we later on agreed on one to use whilst implementing.
                  </li>
                  <li>Used Java to complete the project.</li>
                  <li>
                    As I was working on this project independently, I improved
                    my creativity and independent work by solely researching
                    designs and ideas for the layout of the website.
                  </li>
                  <li>
                    Organised regular meetings with each other to discuss the
                    difficulties and how to overcome them as a team. This
                    enhanced my communication skills as well as my teamwork.
                  </li>
                </ul>
              </div>
            </div>

            <div className="work-experience">
              <div className="other-work-experience-title">
                Other Work Experience
              </div>
              <div className="ata-section">
                <div className="ata-title">
                  Associate Teaching Assistant (ATA)
                </div>
                <div className="date">(Present)</div>
                <ul className="portfolio">
                  <li>Developed communication skills with students.</li>
                  <li>
                    Improved my teaching skills by answering difficult questions
                    given by students.
                  </li>
                  <li>
                    Organised my time between self-learning, teaching and
                    attending lectures and labs.
                  </li>
                  <li>
                    Gained patience when working with students as they are
                    inexperienced in their first year.
                  </li>
                </ul>
              </div>

              <div className="ncs-section">
                <div className="ncs-title">NCS</div>
                <div className="date">(July 2018)</div>
                <ul className="portfolio">
                  <li>
                    Volunteered in an elderly care home as part of our campaign.
                  </li>
                  <li>
                    Refined my speaking skills while surveying the public about
                    issues in their area.
                  </li>
                </ul>
              </div>
            </div>

            <div className="hobbies">
              <div className="hobbies-title">Hobbies</div>
              <div className="hobbies-description">
                Outside of work and study, I am a very active person who enjoys
                playing football, going to the gym, playing the piano and
                improving my chess skills everyday. I have achieved many
                trophies and medals with my previous football team, helping them
                score goals, assist my teammates and improve the team as a
                whole.
              </div>
            </div>

            <div className="references">
              <div className="references-title">References</div>
              <div className="reference-container">
                <div className="email">
                  <div className="circle">
                    <Mailto email="Alan.Edwin.Serrano-Rico@brunel.ac.uk"></Mailto>
                  </div>
                  <div className="reference">
                    Alan Serrano-Rico, Director of BTM
                  </div>
                </div>
                <div className="email">
                  <div className="circle">
                    <Mailto email="Yongmin.Li@brunel.ac.uk"></Mailto>
                  </div>
                  <div className="reference">Yongmin Li, Personal Tutor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
