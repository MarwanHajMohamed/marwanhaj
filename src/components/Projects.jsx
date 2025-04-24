import "../css/projects.css";

import React from "react";
import { useEffect, useState } from "react";
import { Modal } from "./commonStructures/Modal";

import Healio from "../css/images/Healio1.png";
import Healio2 from "../css/images/Healio2.png";
import Healio3 from "../css/images/Healio3.png";
import Healio4 from "../css/images/Healio4.png";
import Healio5 from "../css/images/Healio5.png";
import Healio6 from "../css/images/Healio6.png";
import Healio7 from "../css/images/Healio7.png";

const projects = [
  {
    title: "Full Stack Developer with AI",
    name: "Healio",
    date: "11/2023 - 02/2024",
    skills: ["Machine Learning", "SpringBoot", "React", "Flask", "MySQL"],
    description: [
      "Developed a Random Forest Classification model to predict a disease from given symptoms, and integrated it with a user interface built in React.",
      "Implemented an algorithm in Python to extract symptoms from text, achieving 80% accuracy through rigorous testing and optimisation.",
      "Developed RESTful API endpoints in Python using Flask, enabling the frontend to access the model for disease prediction, ensuring efficient and accurate data communication.",
      "Stored user details and conversations using Spring Boot and MySQL to personalise user experiences and improve system performance, enhancing engagement and retention.",
    ],
    images: [Healio, Healio2, Healio3, Healio4, Healio5, Healio6, Healio7],
    paragraphs: [
      "I developed a Random Forest Classification model to predict diseases based on user-provided symptoms, combining machine learning and frontend development to create a seamless, interactive experience. The model was trained on a structured dataset and integrated into a user-friendly React interface, allowing users to input symptoms and receive real-time predictions about potential conditions. This project aimed to provide quick, accessible health insights and demonstrate how AI can be used in early diagnosis support tools.",
      "To enhance the model's usability, I implemented a custom algorithm in Python capable of extracting symptoms from free-text input. This natural language processing component allowed the system to interpret user entries more flexibly and realistically, achieving an 80% accuracy rate through rigorous testing and optimization. By enabling the system to handle varied user input styles, it significantly improved the accessibility and accuracy of predictions.",
      "I also developed RESTful API endpoints using Flask to serve the model's predictions to the frontend efficiently. These endpoints handled data transmission securely and reliably, ensuring accurate and low-latency communication between the client-side interface and the backend logic. This architecture provided a robust foundation for scalable deployment and integration.",
      "To support personalization and performance, I used Spring Boot and MySQL to store user details and track user conversations. This enabled tailored user experiences and data-driven improvements in system behavior, ultimately enhancing both engagement and user retention. By integrating multiple technologies across the stack, the project demonstrated the power of combining machine learning, web development, and backend engineering in solving real-world problems.",
    ],
    type: "desktop",
  },
  {
    title: "Full Stack Developer",
    name: "EduNotes",
    date: "09/2022 - 03/2023",
    skills: ["HTML", "CSS", "JavaScript", "React", "SpringBoot", "MySQL"],
    description: [
      "Built a full-stack web application enabling users to post, share, and rate notes, driving collaboration.",
      "Created RESTful APIs for user authentication, note management, and ratings, ensuring smooth front-end and back-end integration..",
      "Worked closely with other developers in the team in an agile environment, as well as stakeholders to gather requirements.",
      "Conducted 30+ unit tests to ensure the project functioned as intended under various conditions.",
    ],
    images: [],
    paragraphs: [
      "I built a full-stack web application designed to foster collaboration by allowing users to post, share, and rate academic notes. The platform empowered students to contribute and access study materials, creating a community-driven ecosystem that promoted knowledge sharing and peer feedback. With a focus on usability and engagement, the application encouraged interaction through rating systems and easy content discovery.",
      "To support the application’s core functionality, I developed RESTful APIs that handled user authentication, note management, and rating submissions. These APIs ensured smooth communication between the frontend and backend, enabling real-time interactions and secure data transactions. By adhering to REST principles, the architecture remained scalable, maintainable, and easy to integrate with new features.",
      "I worked closely with a team of developers in an agile environment, participating in daily standups, sprint planning sessions, and iterative feedback cycles. I also collaborated with stakeholders to gather and refine requirements, ensuring the final product aligned with user needs and business goals. This close cooperation facilitated quick adjustments and helped maintain a clear project vision throughout development.",
      "To ensure code quality and system reliability, I wrote and conducted over 30 unit tests across various components. These tests validated the system under a range of conditions, helping to catch edge cases early and improve overall robustness. The testing strategy played a key role in maintaining confidence in the application’s performance as it evolved.",
    ],
    type: "desktop",
  },
  {
    title: "Software Developer",
    name: "Airport Simulation System",
    date: "09/2022 - 03/2023",
    skills: ["Java", "SWT", "Figma"],
    description: [
      "Collaborated in a team to design and develop an Airport Simulation System as part of a first-year university project, using the Waterfall development methodology.",
      "Conducted requirements analysis and system design sessions to define the scope and functionalities of the simulation.",
      "Implemented the application using Java with the SWT (Standard Widget Toolkit) to create an interactive, GUI-based simulation environment.",
      "Performed unit and system testing to validate the simulation logic and ensure smooth user interaction, followed by bug fixing and refinements during the maintenance phase.",
    ],
    images: [],
    paragraphs: [
      "As part of a first-year university project, I collaborated with a team to design and develop an Airport Simulation System, following the Waterfall development methodology. This structured approach allowed us to move through clearly defined stages of development, from initial planning to deployment and maintenance. The simulation aimed to model the operation of an airport environment, including key elements such as flight scheduling, seat selection, and booking meals.",
      "My contributions began with conducting detailed requirements analysis and system design sessions, during which we defined the scope, use cases, and core functionalities of the system. This early planning ensured that our solution addressed all necessary components of the simulation while staying within the project’s academic constraints.",
      "We implemented the application using Java, utilizing the Standard Widget Toolkit (SWT) to build a graphical user interface. The result was an interactive simulation environment that allowed users to visualize and engage with various airport operations in real time. The use of SWT provided a responsive and native-looking UI, enhancing the overall user experience.",
      "To ensure the system functioned as intended, I performed both unit and system testing on the simulation logic and interface. These tests helped identify and resolve bugs, and we continued refining the application during the maintenance phase based on testing feedback. This experience reinforced my understanding of software development lifecycles and the importance of rigorous testing and documentation.",
    ],
    type: "desktop",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div className="projects-page-container" id="projects">
      <div className="wrapper">
        <div className="projects-title">Projects</div>

        {/* NEW WRAPPER TO ALIGN LINE AND PROJECTS */}
        <div className="projects-container">
          <div className="line"></div>
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <div className="circle"></div>
              <div className="project-title">
                <div className="title">{project.title}</div>
                <div className="project-name">{project.name}</div>
                <div className="date-button">
                  <div className="date">{project.date}</div>
                  <button onClick={() => openModal(project)}>Expand</button>
                </div>
                <ul className="project-description">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <div className="skills">
                  {project.skills.map((skill, i) => (
                    <div className="skill" key={i}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <Modal project={selectedProject} onClose={closeModal} />
        )}
      </div>
    </div>
  );
}
