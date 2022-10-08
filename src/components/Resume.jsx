import React from 'react'
import '../css/resume.css'
import Mailto from './Mailto'

function Resume() {
  return (
    <div className='resume-page-container' id='resume'>
      <div className="resume-title">
        Resume
      </div>
      
      <div className="resume-container">
        <div className="cv-title">
           Marwan Haj Mohamed
        </div>
        <div className="sections">
            <div className="cv-section">
                <div className="summary-section">
                    <div className="summary-title">Summary</div>
                    <ul className="summary">
                        <li>
                            Experienced working in web technologies such as React, HTML, JavaScript and CSS while 
                            developing Brunel Talent Marketplace BTM Project.
                        </li>
                        <li>
                            Experienced working with Java while developing an Airport Booking system during my 
                            first-year programming module which I achieved a grade A+ in.
                        </li>
                        <li>
                            Able to work in a fast-paced environment, delivering a working product weekly to the 
                            client during my time at BTM.
                        </li>
                        <li>
                            As a team facilitator in my first-year programming module project, I lead my team
                            to create a working Airport booking system.
                        </li>
                    </ul>
                </div>
                
                <div className="education-section">
                    <div className="education-title">Education</div>
                    <div className="brunel-university">
                        <div className="brunel-title">Brunel University Level 1</div>
                        <div className="date">(2021-2022)</div>
                        <div className="grades">Grades:</div>
                        <ul className="brunel-grades">
                            <li>
                                CS1809 Software Design: <span>A*</span>
                            </li>
                            <li>
                                CS1811 Fundamental Programming Assessment: <span>A+</span>
                            </li>
                            <li>
                                CS1810 Software Implementation Event: <span>A+</span>
                            </li>
                            <li>
                                CS1004 Information Systems and Organisations: <span>A+</span>
                            </li>
                            <li>
                                CS1803 Group Project Reflection: <span>A</span>
                            </li>
                            <li>
                                CS1005 Logic and Computation: <span>A</span>
                            </li>
                            <li>
                                CS1805 Data and Information: <span>C-</span>
                            </li>
                        </ul>
                    </div>
                    <div className="albemarle-college">
                        <div className="albemarle-title">Albemarle Independent College</div>
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
                        <div className="douay-title">Douay Martyrs Secondary School</div>
                        <div className="date">(2013-2018)</div>
                        <div className="grades">11 GCSES, grades A-C including Maths, English and Triple Science.</div>
                    </div>

                </div>

                <div className="work-experience">
                    <div className="work-experience-title">Work Experience</div>
                    <div className="btm-section">
                        <div className="btm-title">BrunelTalentMarketplace.com (BTM)</div>
                        <div className="date">(July-September 2022)</div>
                        <ul className="btm">
                            <li>
                                Working in a fast-paced, weekly delivery environment (Agile environment).
                            </li>
                            <li>
                                Working with a team to develop the front-end side of <span />
                                <a href="http://www.bruneltalentmarketplace.com/">Bruneltalentmarketplace</a>.
                            </li>
                            <li>
                                Delivering working user stories given by the user before the deadline is met.
                            </li>
                            <li>
                                Developing new skills in Figma, ReactJS, JavaScript, CSS and HTML.
                            </li>
                        </ul>
                    </div>

                    <div className="portfolio-section">
                        <div className="portfolio-title">Marwanhaj.com</div>
                        <div className="date">(September 2022)</div>
                        <ul className="portfolio">
                            <li>
                            	Developed a personal portfolio website using ReactJS.
                            </li>
                            <li>
                            	Gained more knowledge about React, CSS and JS.
                            </li>
                            <li>
                            	Enhanced my research and problem-solving skills.
                            </li>
                        </ul>
                    </div>

                    <div className="ata-section">
                        <div className="ata-title">Associate Teaching Assistant (ATA)</div>
                        <div className="date">(Present)</div>
                        <ul className="portfolio">
                            <li>
                            	Developed communication skills with students.
                            </li>
                            <li>
                            	Improved my teaching skills by answering numerous questions given by students.
                            </li>
                            <li>
                            	Organised my time between self-learning, teaching and attending lectures and labs.
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
                            	Refined my speaking skills while surveying the public about issues in their area.
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="profile-section">
                <div className="personal-info">
                    <div className="personal-info-title">Personal Info</div>
                    <div className="email-container">
                        <div className="email-title">Email</div>
                        <div className="email-info">
                            <div className="circle">
                                <Mailto email='2017159@brunel.ac.uk'>
                                </Mailto>
                            </div>
                            <div className="email">marwan.khaj@hotmail.com</div>
                        </div>

                    </div>
                    <div className="phone">
                        <div className="phone-title">Phone</div>
                        <div className="phone-number">07505822779</div>
                    </div>
                </div>

                <div className="skills">
                    <div className="skills-title">Skills</div>
                    <div className="skill-name">
                        <div className="react">
                            React
                        </div>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>

                    <div className="skill-name">
                        <div className="js">
                            JavaScript
                        </div>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                    </div>

                    <div className="skill-name">
                        <div className="css">
                            CSS
                        </div>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>

                    <div className="skill-name">
                        <div className="html">
                            HTML
                        </div>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                    </div>

                    <div className="skill-name">
                        <div className="figma">
                            Figma
                        </div>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                    </div>

                    <div className="skill-name">
                        <div className="java">
                            Java
                        </div>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                    </div>

                    <div className="skill-name">
                        <div className="leadership">
                            Leadership
                        </div>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>

                    <div className="skill-name">
                        <div className="teamwork">
                            Teamwork
                        </div>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                    </div>

                    <div className="skill-name">
                        <div className="quick-learner">
                            Quick Learner
                        </div>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>

                <div className="languages">
                    <div className="languages-title">Languages</div>
                    <div className="language-name">
                        <div className="arabic">Arabic</div>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>

                    <div className="language-name">
                        <div className="english">English</div>
                        <div className="stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>

                <div className="hobbies">
                    <div className="hobbies-title">Hobbies</div>
                    <div className="piano">Piano</div>
                    <div className="football">Football</div>
                    <div className="gym">Gym</div>
                    <div className="swimming">Swimming</div>
                </div>

                <div className="references">
                    <div className="reference-title">References</div>
                    <div className="email-info">
                        <div className="circle">
                            <Mailto email='alan.edwin.serrano-rico@brunel.ac.uk'>
                            </Mailto>
                        </div>
                        <div className="reference-1">Alan Serrano Rico, Director of BTM</div>
                    </div>
                    <div className="email-info">
                        <div className="circle">
                            <Mailto email='yongmin.Li@brunel.ac.uk'>
                            </Mailto>
                        </div>
                        <div className="reference-1">Yongmin Li, Personal Tutor</div>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Resume
