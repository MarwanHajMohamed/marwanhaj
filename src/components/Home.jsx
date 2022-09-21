import React from 'react'
import Navbar from './Navbar'
import '../css/home.css'
import Mailto from './Mailto'
// import typewriter from '../typewriter'

export default function Home() {
  
    return (
      <>
        <Navbar />
        <div className="page-container" id='home'>
          <div className="logo">MHM</div>
            <div className="title">
              Marwan Haj Mohamed
            </div>
            <div className="email">
              <div className="circle">
                <Mailto email='2017159@brunel.ac.uk'>
                  icon='fa-regular fa-envelope'
                </Mailto>
              </div>
              <div className="email-text">
                marwan.khaj@hotmail.com
              </div>
            </div>
            <div className="description-wrapper">
              <div className='dynamic-txts' id='text'></div>
              {/* <script src={typewriter} /> */}
            </div>
        </div>
      </>
    )
  }
