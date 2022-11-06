import React from 'react'
import '../../css/homeCard.css'

export default function HomeCard({icon}) {
  return (
    <div className='homeCard-container'>
        <div className="homeCard">
            <i className={icon}></i>
        </div>
       
    </div>
  )
}
