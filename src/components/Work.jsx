import { useEffect, useState } from "react";
import "../css/work.css";
import { Modal } from "./commonStructures/Modal";

import BTM1 from "../css/images/BTM1.png";
import BTM2 from "../css/images/BTM2.png";
import BTM3 from "../css/images/BTM3.png";

import JaceenHealth from "../css/images/JaceenHealth.png";
import JaceenHealth2 from "../css/images/JaceenHealth2.png";
import JaceenHealth3 from "../css/images/JaceenHealth3.png";

import JHCAddress from "../css/images/JHCAddress.png";
import JHCAddress2 from "../css/images/JHCAddress2.png";

import HecoCalc from "../css/images/HecoCalc1.png";
import HecoCalc2 from "../css/images/HecoCalc2.png";
import HecoCalc3 from "../css/images/HecoCalc3.png";
import HecoCalc4 from "../css/images/HecoCalc4.png";

import AlMadani from "../css/images/AlMadani1.png";
import AlMadani2 from "../css/images/AlMadani2.png";
import AlMadani3 from "../css/images/AlMadani3.png";
import AlMadani4 from "../css/images/AlMadani4.png";
import AlMadani5 from "../css/images/AlMadani5.png";
import AlMadani6 from "../css/images/AlMadani6.png";
import AlMadani7 from "../css/images/AlMadani7.png";
import AlMadani8 from "../css/images/AlMadani8.png";

import Manazil from "../css/images/Manazil.png";
import Manazil2 from "../css/images/Manazil2.png";

const projects = [
  {
    title: "Full Stack Developer",
    name: "Jaceen Health | Contract",
    date: "02/2025 - 04/2025",
    skills: ["TypeScript", "MongoDB", "Express", "React", "Node.js"],
    description: [
      "Collaborated with a healthcare company to design and build an e-commerce web application using the MERN (MongoDB, Express, React, Node.js) stack as well as TypeScript.",
      "Optimized product loading performance by implementing caching strategies to reduce redundant API calls, cutting backend requests by 40%.",
      "Developed secure user and admin role management with authentication and authorization using JWT, utilising Context API to manage different states of users.",
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
    title: "Frontend Developer",
    name: "JanaHealthCare (JHC) | Contract",
    date: "09/2024 - 12/2024",
    skills: ["React", "HTML", "JavaScript", "CSS"],
    description: [
      "Partnered with a dermatology company to design and launch a React-based web application, resulting in the successful acquisition of 15+ new customers.",
      "Designed and implemented modular, reusable components using React Hooks, improving development efficiency and long-term scalability.",
      "Ensured cross-browser compatibility and responsive design across desktop and mobile, enhancing user experience and accessibility.",
    ],
    images: [JHCAddress, JHCAddress2],
    paragraphs: [
      "I partnered with a dermatology company to design and launch a web application built with React, tailored specifically to their business needs and customer base. This collaboration led to the successful acquisition of over 15 new customers shortly after launch, demonstrating the effectiveness of the platform in driving engagement and conversions. My focus was on delivering a user-friendly interface that reflected the brand's professionalism and helped streamline the online experience for prospective clients.",
      "One of the standout features I developed was an interactive sliding line component to display before-and-after images of patients. This feature allowed users to visually compare treatment results in real time by dragging a slider across the image. It was designed to be lightweight, intuitive, and fully responsive, giving potential clients a compelling, trust-building visual demonstration of the clinic’s results. The slider significantly increased user engagement on treatment pages and was praised by the client for its simplicity and effectiveness.",
      "To ensure a smooth user experience across all devices and browsers, I prioritized responsive design and cross-browser compatibility. I rigorously tested the application on various screen sizes and platforms, refining layouts and interactions to meet modern accessibility standards. The result was a polished, mobile-first web experience that provided users with reliable performance and an intuitive interface, regardless of how they accessed the site.",
    ],
    type: "desktop",
  },
  {
    title: "Frontend Developer",
    name: "Brunel Talent Marketplace (BTM)",
    date: "08/2022 - 05/2024",
    skills: ["Jira", "React", "HTML", "JavaScript", "CSS"],
    description: [
      "Launched BTM, a university consultancy service, using React with a team of 3 engineers in an agile environment, providing consultation to startups and SMEs.",
      "Delivered 3 full-featured web applications (HecoCalc, HecoCost, HecoRep) for HecoAnalytics, driving a 30% increase in customer satisfaction through enhanced functionality and user experience.",
      "Participated in code reviews, sprint planning, and user feedback sessions, promoting a collaborative development environment.",
    ],
    images: [BTM1, BTM2, BTM3],
    paragraphs: [
      "I co-launched BTM, a university consultancy service aimed at providing technical and strategic support to startups and small-to-medium enterprises. Working alongside a team of three engineers in an agile environment, I contributed to the development of the platform using React. The consultancy offered tailored web solutions and technical insights to early-stage companies, helping them establish their digital presence and streamline their operations. Our agile workflow allowed us to iterate quickly based on client needs and feedback, ensuring that the solutions we delivered were both effective and user-centric.",
      "As part of our consultancy work, I led the delivery of three full-featured web applications—HecoCalc, HecoCost, and HecoRep—for a client called HecoAnalytics. These tools provided specialized analytics, reporting, and cost estimation functionalities designed to meet the needs of their customers. By enhancing the overall functionality and usability of their digital tools, we were able to drive a 30% increase in customer satisfaction. Each application was built with performance, scalability, and intuitive UX in mind, helping the client stand out in a competitive data analytics space.",
      "Throughout the development process, I actively participated in code reviews, sprint planning sessions, and regular user feedback meetings. These practices fostered a highly collaborative environment that emphasized code quality, continuous improvement, and responsiveness to user needs. My involvement in both technical execution and team coordination contributed to the overall success and timely delivery of our projects.",
    ],
    type: "desktop",
  },
  {
    title: "Frontend Developer",
    name: "HecoCalc",
    date: "12/2022 - 05/2023",
    skills: ["React", "AWS S3", "AWS Cognito", "Jira", "React D3 Tree"],
    description: [
      "Built and deployed a cost-analysis platform, increasing client efficiency by 25%.",
      "Reverse-engineered Excel models to build custom algorithms for automated financial simulations and sensitivity analysis.",
      "Worked with cross-functional teams to translate figma designs into a multi-page web application using React and React D3 Tree.",
      "Stored user details in AWS Cognito and JSON files in S3 buckets, focusing on scalability and reliability.",
    ],
    images: [HecoCalc, HecoCalc2, HecoCalc3, HecoCalc4],
    paragraphs: [
      "I was responsible for building and deploying a cost-analysis platform that significantly improved client efficiency by 25%. The platform enabled clients to better understand and manage their financial operations through an intuitive interface and powerful analytics tools. By streamlining complex financial calculations, the platform empowered users to make more informed decisions and optimize their processes.",
      "One of my key contributions involved reverse-engineering Excel models to develop custom algorithms that automated financial simulations and sensitivity analyses. These algorithms reduced manual effort and provided more accurate, real-time insights into the financial scenarios, helping clients make data-driven decisions with greater confidence.",
      "Additionally, I collaborated with cross-functional teams to translate Figma designs into a multi-page web application. Using React for the frontend and React D3 Tree for data visualization, I created an interactive and visually appealing experience that displayed complex financial data in an accessible way. This allowed users to explore financial models with ease, improving both usability and engagement.",
      "To ensure scalability and reliability, I stored user details in AWS Cognito for secure authentication and utilized S3 buckets to store JSON files, providing a robust and cost-effective solution for data storage. This architecture ensured that the platform could scale as the client’s user base grew, while also offering fast and reliable access to critical data.",
    ],
    type: "desktop",
  },
  {
    title: "Frontend Developer",
    name: "AlMadani | Contract",
    date: "07/2023 - 08/2023",
    skills: ["React Native", "JavaScript", "Figma"],
    description: [
      "Collaborated with a rental agency to develop a mobile application using React Native.",
      "Gathered and analysed requirements, ensuring app development aligned with business objectives, resulting in 30% increase of service usage within the first three months.",
      "Designed wireframes using Figma to create a clear visual structure of the user interface.",
    ],
    images: [
      AlMadani,
      AlMadani2,
      AlMadani3,
      AlMadani4,
      AlMadani5,
      AlMadani6,
      AlMadani7,
      AlMadani8,
    ],
    paragraphs: [
      "I collaborated with a rental agency to develop a mobile application using React Native, aimed at improving how users discover and inquire about rental properties. The app provided a clean, responsive interface where users could browse available listings and quickly connect with agents. I implemented a feature that redirects users to WhatsApp or initiates a phone call when they tap on a listing's 'Book through WhatsApp' option. This redirection includes a prewritten message, making it easy for users to initiate conversations with agents and reducing friction in the booking inquiry process.",
      "During the development process, I gathered and analysed business requirements to ensure the app aligned closely with the agency’s goals. By prioritising features that enhanced user engagement and simplified communication, the app achieved a 30% increase in service usage within its first three months post-launch.",
      "To support the development and ensure visual consistency, I created wireframes using Figma, laying out the structure of each screen and interaction flow. These wireframes played a crucial role in aligning the design vision with the development process and helped deliver an intuitive experience tailored to the needs of both users and the business.",
    ],
    type: "mobile",
  },
  {
    title: "Frontend Developer",
    name: "Manazil | Contract",
    date: "04/2022 - 06/2022",
    skills: ["HTML", "CSS", "JavaScript", "React", "Figma"],
    description: [
      "Developed a responsive single-page application for an engineering consultancy, enhancing user experience and accessibility across devices, resulting in a 200+ user increase in customer engagement.",
      "Boosted application performance by integrating lazy loading, reducing initial load times by 30%.",
    ],
    images: [Manazil, Manazil2],
    paragraphs: [
      "I developed a responsive single-page application (SPA) for an engineering consultancy, designed to provide a seamless and intuitive browsing experience across both desktop and mobile devices. The application served as a central hub for showcasing the consultancy's services, projects, and contact options. By focusing on accessibility and responsive design best practices, the platform enhanced the overall user experience, leading to a noticeable increase in customer engagement, growing the user base by over 200 within a short period after launch.",
      "To further improve performance and user satisfaction, I implemented lazy loading for non-critical components and assets. This optimization reduced the initial load time by approximately 30%, allowing users to interact with the core content more quickly and efficiently. These enhancements not only improved performance metrics but also contributed to a more polished and professional perception of the consultancy’s digital presence.",
    ],
    type: "desktop",
  },
];

function Projects() {
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
    <div className="projects-page-container" id="work">
      <div className="wrapper">
        <div className="projects-title">Work Experience</div>
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

export default Projects;
