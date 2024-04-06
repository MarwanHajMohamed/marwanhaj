import React from "react";
import "../css/about.css";
import Card from "./commonStructures/Card";

export default function About() {
  return (
    <div>
      <div className="about-container" id="about">
        <div className="about-title">About Me</div>
        <div className="description">
          I am a passionate, quick learning programmer that constantly broadens
          my knowledge in different languages to earn more experience in this
          field. I have knowledge in the following so far:
        </div>
        <div className="card-container">
          <Card
            icon="fa-brands fa-python"
            title="Python"
            text="Proficient in Python development with extensive experience in designing, developing and testing
            different NLP algorithms."
          />
          <Card
            icon="fa-solid fa-computer"
            title="Machine Learning"
            text="Experience in ML algorithms such as Random Forest Classifier, applying it to the Healio chatbot
            to understand symptoms and diagnose users."
          />
          <Card
            icon="fa-brands fa-react"
            title="ReactJS"
            text="Skilled ReactJS developer capable in building dynamic and responsive user interfaces, gaining
            knowledge through building various websites."
          />
          <Card
            icon="fa-solid fa-mobile-screen"
            title="React Native"
            text="Skilled React Native developer utilising my knowledge in React to build cross platform mobile
            applications such as Al Madani (Shown in Projects)."
          />
          <Card
            icon="fa-solid fa-power-off"
            title="SpringBoot"
            text="Expert SpringBoot developer, building scalable Java-based web applications while
            creating Rest-APIs integrated with SQL databases."
          />
          <Card
            icon="fa-brands fa-java"
            title="Java"
            text="Experience in Java development, leveraging its robust features and libraries to develop versatile
            applications such as an Airport booking system."
          />
        </div>
      </div>
    </div>
  );
}
