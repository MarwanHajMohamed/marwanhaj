import React from 'react'
import Navbar from './Navbar'
import '../css/home.css'
import Mailto from './Mailto'
import Laptop from '../css/images/laptop.png'
// import typewriter from '../typewriter'

export default function Home() {
  
    return (
      <>
        <Navbar />
        <div className="page-container" id='home'>
          {/* <img src={Laptop} alt="laptop" className="laptop" /> */}
          <div className="logo">MHM</div>
            <div className="title">
              Marwan Haj Mohamed
            </div>
            <div className="email">
              <div className="circle">
                <Mailto email='marwan.khaj@hotmail.com'>
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
