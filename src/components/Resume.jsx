import React from 'react'
import '../css/resume.css'

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
        <div className="cv-description">
            <div className="cv-personal-details-title">
                Personal Details
            </div>
            <div className="cv-personal-details">
                <ul>
                    <li className='personal-details-list'>
                       An Undergraduate Computer Science student at Brunel University 
                    </li>
                    <li>
                       Currently at level 2 in my studies
                    </li>
                </ul>
                I have gained great knowledge of Java and programming during my first year at university, 
                along with working as a team, trying to figure out the best methodology to use in order to 
                complete a given group project. I am a fast learner and am very keen to learn and gain more and 
                more knowledge in the work industry to prepare me for life outside university.
            </div>
            <div className="cv-education-title">
                Education
            </div>
            <div className="cv-education">
                <div className="education-title">
                    Brunel University Level 1
                </div>
                <div className="education">
                    <div className='content-1'>(2021-2022)</div> 
                    <div className="content-2">Grades:</div>
                </div>
                <ul>
                    <li className="level-1-results">
                        CS1809 Software Design: <span className='grade'>A*</span>
                    </li>
                    <li className="level-1-results">
                        CS1811 Fundamental Programming Assessment: <span className='grade'>A+</span>
                    </li>
                    <li className="level-1-results">
                        CS1810 Software Implementation Event: <span className='grade'>A+</span>
                    </li>
                    <li className="level-1-results">
                        CS1004 Information Systems and Organisations: <span className='grade'>A+</span>
                    </li>
                    <li className="a-level-results">
                        CS1803 Group Project Reflection: <span className='grade'>A</span>
                    </li>
                    <li className="level-1-results">
                        CS1005 Logic and Computation: <span className='grade'>A</span>
                    </li>
                    <li className="level-1-results">
                        CS1805 Data and Information: <span className='grade'>C-</span>
                    </li>
                </ul>
                <div className="education-title">
                    Albemarle Independent College
                </div>
                <div className="education">
                    <div className='content-1'>(2019-2020)</div> 
                    <div className="content-2">A-Levels:</div>
                    <ul>
                        <li className="a-level-results">
                            Arabic: <span className='grade'>A</span>
                        </li>
                        <li className="a-level-results">
                            Maths: <span className='grade'>B</span>
                        </li>
                        <li className="a-level-results">
                            Economics: <span className='grade'>B</span>
                        </li>
                        <li className="a-level-results">
                            Computer Science: <span className='grade'>B</span>
                        </li>
                    </ul>
                </div>
                <div className="education-title">
                    Douay Martyrs Secondary School
                </div>
                <div className="education">
                    <div className="content-1">(2013-2018)</div>
                    <div className="content-2">11 GCSES, grade A-C including Maths, English and Triple Science.</div>
                </div>
            </div>
            <div className="cv-work-experience-title">
                Work Experience
            </div>
            <div className="cv-education">
                <div className="education-title">
                    Brunel Talent Marketplace
                </div>
                <div className="education">
                    During the summer of 2022, I had dived into the world of ReactJS, and have since worked 
                    with my university to build BrunelTalentMarketplace.com. I worked with a 
                    team of 3 people in an Agile Methodology environment, which taught me many skills and 
                    lessons about the programming life. Some of these skills included:
                </div>
                <ul>
                    <li className="brunel-list">
                        Working in a fast-paced, weekly delivery environment. Every week we would meet 
                        with the customer, showing off the progress of the website and what needs improvement. 
                        Since we are working with Scrum (an agile methodology), we were given user stories which 
                        needed to be completed in a set timeframe, usually a week or 2. This taught me how to work 
                        under pressure and deliver good quality sprints in a limited time.
                    </li>
                    <li>
                        Working with a team. As the project required constant interaction with the customer, 
                        we had to work with an agile methodology, which meant that I was working in a small team 
                        that had constant meetings and interactions with each other. This helped me develop working 
                        with a team and interchanging brilliant ideas of what makes a website modern and easy to use. 
                        We used GitHub to merge our work together.
                    </li>
                </ul>
                <div className="education-title">
                    NCS
                </div>
                <div className="education">
                    I have taken part in NCS voluntary work during my summer of 2018, which has taught me multiple 
                    skills that elevate my listening and speaking. During NCS, I learnt:
                </div>
                <ul>
                    <li className="ncs">
                        How to live alone and take responsibility of myself and my flatmates. During this week, 
                        my flat mates and I faced a few challenges that we have not seen before. We learnt how to 
                        coordinate ourselves in our flat, how to communicate with each other as a team and how to 
                        survive on our own for the first time.
                    </li>
                    <li className='ncs'>
                        How to confidently speak and listen to strangers, whilst also advertising our campaign 
                        during that time. We worked in groups to create a party for the younger generation, 
                        where they can enjoy themselves having their faces painted, whilst also speaking to their 
                        parents about what we do. Overall, it was an educational week for myself and my group.
                    </li>
                    <li className='ncs'>
                        How to manage my time. During NCS, we had to wake up at a certain time, have breakfast 
                        and get ready for the exercises and challenges that we will face throughout the day. 
                        I managed my time well enough to tackle the obstacles I encountered, while also learning 
                        as many skills as I possibly can.
                    </li>
                </ul>
                <div className="cv-education">
                    <div className="education-title">
                        Tutor
                    </div>
                    <div className="education">
                        I have tutored 2 GCSE students while studying A Levels, and during that time:
                    </div>
                    <ul>
                        <li className="tutor">
                            I improved my learning and teaching skills, as creating lessons for students 
                            allowed me to learn different methods of understanding and memorising content. 
                            One method that I figured out which was helpful was reading out loud what I am trying 
                            to memorise. A study from the University of Waterloo showed that reading out loud helps 
                            to get words into long-term memory.
                        </li>
                        <li className="tutor">
                            I improved my social skills. This is because tutoring allowed me to communicate 
                            with different students and parents, therefore I became a more confident speaker and listener.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="cv-hobbies-title">
                Hobbies
            </div>
            <div className="education-title">
                Piano
            </div>
            <div className="education">
                In my free time, I like to play the piano. It teaches me discipline, co-ordination and improves 
                my learning skills. I took lessons for 2 years in 2015 and have achieved grade 3. Since then, 
                I have stopped lessons and started developing my own piano skills and have developed a great music 
                listening skill.
            </div>
            <div className="education-title">
                Sports
            </div>
            <div className="education">
                <div className="content-1">
                    I consider myself an athletic person, as I am a goalkeeper for my local football team, 
                    winning our league title and our cup final last year. I have been awarded best 
                    goalkeeper of our league last season, as I have shown my skills thoroughly throughout 
                    our matches, keeping clean sheets, as well as adding assists to my name. 
                    Playing football in a team teaches me communication and group work, since you excel as a 
                    team and not as an individual at this sport.
                </div>
                <div className="content-2">
                    In addition, I take care of my physical and mental health by going to the gym daily. 
                    The gym teaches me self-discipline, as well as dedication, for it takes time and patience 
                    to build a fit body and have a solid mindset to not quit. 
                </div>
            </div>
            <div className="cv-referees-title">
                Referees
            </div>
            <div className="education">
                <div className="referee-1">
                    Annette Payne, Annette.Payne@brunel.ac.uk, Brunel University, Personal Tutor
                </div>
                <div className="referee-2">
                    Alan Serrano Rico, Alan.Edwin.Serrano-Rico@brunel.ac.uk, Brunel University, Director of BTM
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
