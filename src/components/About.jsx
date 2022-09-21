import React from 'react'
import '../css/about.css'
import Card from './commonStructures/Card'

export default function About() {
    return (
      <div>
        <div className="about-container" id='about'>
          <div className="about-title">About Me</div>
          <div className="description">
            I am a passionate, quick learning programmer that 
            constantly broadens my knowledge in different languages to earn more experience 
            in this field. I have knowledge in the following so far:
          </div>
          <div className="card-container">
            <Card 
              icon="fa-brands fa-react"
              title="ReactJS Development"
              text="During the summer of first year university, I took on the challenge of learning ReactJS,
              and have since worked with a company to develop the front-end of their website."
            />
            <Card 
              title="CSS"
              icon="fa-brands fa-css3-alt"
              text="Whilst practicing ReactJS development, I have picked up valuable skills within CSS.
              These skills helped me style components to be visually appealing and easily understandable."
            />
            <Card 
              icon="fa-brands fa-java"
              title="Java Development"
              text="As a Computer Science student, working with Java has made it possible to create 
              applications such as an Airport booking system, a Notes application and so on."
            />
          </div>
        </div>
      </div>
    )
  }
