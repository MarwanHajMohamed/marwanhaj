import React, { useEffect } from 'react'
import '../css/projects.css'
import Modal from './Modal'

import {useState} from 'react';

import BTM1 from '../css/images/BTM1.png'
import BTM2 from '../css/images/BTM2.png'
import BTM3 from '../css/images/BTM3.png'

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0)
  }, [])

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  const [isOpen, setIsOpen] = useState(false)

  return (
    <button className="slideshow">
        <button onClick={prev} className='prev'>
          <i class="fa-solid fa-chevron-left" />
        </button>
        <img src={imgs[index]} alt='img' className="mainImg"  onClick={() => setIsOpen(true)}/>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <div className='largeImg-container'>
            <img src={imgs[index]} alt='img' className="largeImg" />
          </div>
        </Modal>
        <button onClick={next} className='next'>
          <i class="fa-solid fa-chevron-right" />
        </button>
    </button>
  )
}

function Projects() {
  return (
    <div className="projects-page-container" id='projects'>
        <div className="projects-title">
            Projects
        </div>
        <div className="project-description">
            Here are some of the projects I worked on:
        </div>
        <Slideshow 
          imgs={[
            BTM1, BTM2, BTM3
          ]}
        />
        <a href="http://www.bruneltalentmarketplace.com/" className="BTMLink">Brunel Talent Marketplace</a>
    </div>
  )
}

export default Projects
