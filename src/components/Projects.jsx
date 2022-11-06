import React, { useEffect } from 'react'
import '../css/projects.css'

import {useState} from 'react';

import BTM1 from '../css/images/BTM1.png'
import BTM2 from '../css/images/BTM2.png'
import BTM3 from '../css/images/BTM3.png'

  const closeModalButton = document.querySelectorAll('[data-close-button]')
  const openModalButton = document.querySelectorAll('[data-modal-target]')
  const overlay = document.getElementById('overlay')
  const modal = document.getElementById('modal')

  closeModalButton.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal')
      closeModal(modal)
    })
})

openModalButton.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

function closeModal(modal) {
  if (modal == null) {
    return
  }
  modal.classList.remove('active')
  document.body.classList.remove('active')
  overlay.classList.remove('active')
}

function openModal(modal) {
  if (modal == null) {
    return
  }
  document.body.classList.add('active')
  modal.classList.add('active')
  overlay.classList.add('active')
}

function Projects() {
  const [index, setIndex] = useState(0);
  const imgs = [BTM1, BTM2, BTM3]

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

  return (
    <>
      <div className="modal" id='modal'>
        <button data-close-button className="close-button">&times;</button>
        <div className="modal-body">
          <img src={imgs[index]} alt='img' className="mainImg" />
        </div>
      </div>

      <div className="overlay" id='overlay' onClick={() => closeModal(modal)}></div>

      <div className="projects-page-container" id='projects'>
          <div className="projects-title">
              Projects
          </div>
          <div className="project-description">
              Here are some of the projects I worked on:
          </div>
          
          
          <div className="slideshow" > 
            <button onClick={prev} className='prev'>
              <i class="fa-solid fa-chevron-left" />
            </button>
            <img data-modal-target='#modal' src={imgs[index]} alt='img' className="mainImg" />
            <button onClick={next} className='next'>
              <i class="fa-solid fa-chevron-right" />
            </button>
          </div>
          

          <a href="http://www.bruneltalentmarketplace.com/" className="BTMLink">Brunel Talent Marketplace</a>
      </div>
    </>
  )
}

export default Projects
