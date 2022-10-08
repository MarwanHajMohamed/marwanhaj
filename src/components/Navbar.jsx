import React from 'react'
import { Link } from 'react-scroll'
import { useState } from 'react'

import '../css/navbar.css'
import Marwan from '../css/images/MarwanHajMohamed.png'

export default function Navbar() {

    const [toggle, setToggle] = useState(false)

    const toggleNav = () => {
        const state = toggle;
        setToggle(!state)
    }

    return (
        <>
            <div style={{width: toggle ? "200px" : "47px", zIndex: 10}} className={'navbar-container'}>
                
            <button className="collapse" onClick={toggleNav}>
                    <i className={"fa-solid "  + (toggle ? "fa-x" : "fa-bars")}></i>
                </button>
                <div className={"nav-collapse" + (toggle ? " show" : "")}>
                <button className="collapse" onClick={toggleNav}>
                    <i className={"fa-solid "  + (toggle ? "fa-x" : "fa-bars")}></i>
                </button>
                    <div className="navbar">
                        <div className="profile-photo">
                            <img src={Marwan} alt="img"/>
                        </div>
                        <div className="first-name" >
                            Marwan
                        </div>
                        <div className="surname">
                            Haj Mohamed
                        </div>

                        <div className={"navbar-list"}>
                            <li className='nav-item'>
                                <div className="home">
                                    <Link 
                                    to ="home" 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500} 
                                    onClick={toggleNav}
                                    className="button">
                                        Home
                                    </Link>
                                </div>
                            </li>
                            <li className='nav-item'>
                                <div className="about-me">
                                <Link 
                                    to ="about" 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500}
                                    offset={15}
                                    onClick={toggleNav}
                                    className="button">
                                        About
                                    </Link>
                                </div>
                            </li>
                            <li className='nav-item'>
                                <div className="projects">
                                <Link 
                                    to ="projects" 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500} 
                                    offset={15}
                                    onClick={toggleNav}
                                    className="button">
                                        Projects
                                    </Link>
                                </div>
                            </li>
                            <li className='nav-item'>
                                <div className="resume">
                                <Link 
                                    to ="resume" 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500} 
                                    offset={15}
                                    onClick={toggleNav}
                                    className="button">
                                        Resume
                                    </Link>
                                </div>
                            </li>
                            {/* <li className='nav-item'>
                                <div className="contact">
                                <Link 
                                    to ="contact" 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500} 
                                    onClick={closeMenu}
                                    className="button">
                                        Contact
                                    </Link>
                                </div>
                            </li> */}
                        </div>
                    </div>
                    <a href="https://www.linkedin.com/in/marwan-haj-mohamed-305578218/" className="socials">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>

                </div>
            </div>
        </>
    )
  }
