import "../css/projects.css";

import React from "react";
import { useEffect, useState } from "react";
import { Modal } from "./commonStructures/Modal";

import JaceenHealth from "../css/images/JaceenHealth.png";
import JaceenHealth2 from "../css/images/JaceenHealth2.png";
import JaceenHealth3 from "../css/images/JaceenHealth3.png";

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
    images: [JaceenHealth, JaceenHealth2, JaceenHealth3],
    paragraphs: [
      "I collaborated with a healthcare company to design and develop a full-featured e-commerce web application using the MERN (MongoDB, Express.js, React, Node.js) stack along with TypeScript. My role encompassed both frontend and backend responsibilities, ensuring seamless integration between user-facing interfaces and server-side logic. The goal was to create a robust and scalable platform that could handle dynamic product listings, user management, and secure transactions, all while maintaining a clean and intuitive user experience tailored to the healthcare domain.",
      "To enhance performance and reduce unnecessary backend strain, I implemented effective caching strategies across the application. This optimization significantly improved product loading times by minimizing redundant API calls, resulting in a 40% reduction in backend requests. These changes not only boosted overall site responsiveness but also contributed to better resource allocation on the server side, especially during high-traffic periods.",
      "In addition, I engineered a secure role-based access control system for both users and administrators. Leveraging JWT (JSON Web Tokens) for authentication and authorization, I ensured that sensitive operations were properly gated based on user roles. I also utilized React's Context API to manage authentication state and role-specific UI rendering throughout the app, allowing for a more maintainable and scalable approach to state management across different components and user journeys.",
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
      "I partnered with a dermatology company to design and launch a web application built with React, tailored specifically to their business needs and customer base. This collaboration led to the successful acquisition of over 15 new customers shortly after launch, demonstrating the effectiveness of the platform in driving engagement and conversions. My focus was on delivering a user-friendly interface that reflected the brand's professionalism and helped streamline the online experience for prospective clients.",
      "One of the standout features I developed was an interactive sliding line component to display before-and-after images of patients. This feature allowed users to visually compare treatment results in real time by dragging a slider across the image. It was designed to be lightweight, intuitive, and fully responsive, giving potential clients a compelling, trust-building visual demonstration of the clinic’s results. The slider significantly increased user engagement on treatment pages and was praised by the client for its simplicity and effectiveness.",
      "To ensure a smooth user experience across all devices and browsers, I prioritized responsive design and cross-browser compatibility. I rigorously tested the application on various screen sizes and platforms, refining layouts and interactions to meet modern accessibility standards. The result was a polished, mobile-first web experience that provided users with reliable performance and an intuitive interface, regardless of how they accessed the site.",
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
      "I co-launched BTM, a university consultancy service aimed at providing technical and strategic support to startups and small-to-medium enterprises. Working alongside a team of three engineers in an agile environment, I contributed to the development of the platform using React. The consultancy offered tailored web solutions and technical insights to early-stage companies, helping them establish their digital presence and streamline their operations. Our agile workflow allowed us to iterate quickly based on client needs and feedback, ensuring that the solutions we delivered were both effective and user-centric.",
      "As part of our consultancy work, I led the delivery of three full-featured web applications—HecoCalc, HecoCost, and HecoRep—for a client called HecoAnalytics. These tools provided specialized analytics, reporting, and cost estimation functionalities designed to meet the needs of their customers. By enhancing the overall functionality and usability of their digital tools, we were able to drive a 30% increase in customer satisfaction. Each application was built with performance, scalability, and intuitive UX in mind, helping the client stand out in a competitive data analytics space.",
      "Throughout the development process, I actively participated in code reviews, sprint planning sessions, and regular user feedback meetings. These practices fostered a highly collaborative environment that emphasized code quality, continuous improvement, and responsiveness to user needs. My involvement in both technical execution and team coordination contributed to the overall success and timely delivery of our projects.",
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
