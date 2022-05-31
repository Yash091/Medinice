import React from 'react'
import "./WhyChooseUs.css"

import dr from "../../images/dr2.png"
import health from "../../images/health.jpg"
import team from "../../images/team.jpg"
import support from "../../images/support.jpg"

const WhyChooseUs = () => {
  return (
    <div className='choose-container' id ='why'>
        <div className='desc'>
            <div className='head'>All-in-One Treatment and Health Solution</div>
            <div className='sub-head'>There are many variations of passages of Ipsum available, but the majority have suffered alteration in some form, by injected humour or randomized words.
            </div>
            <div className='options'>
              <li className="item">
                {/* <i className="fa-solid fa-user-doctor"></i> */}
                <img className="img" src={health} />
                <p className="heading">Medical & Health</p>
                <p className="text1">We can help you find available vaccine appointments near you or notify you when availability</p>
              </li>
              <li className="item">
                {/* <i className="fa-solid fa-user-doctor"></i> */}
                <img className="img" src={team}/>
                <p className="heading">Dedicated Team</p>
                <p className="text1">We can help you find available vaccine appointments near you or notify you when availability</p>
              </li>
              <li className="item">
                {/* <i className="fa-solid fa-user-doctor"></i> */}
                <img className="img" src={support} />
                <p className="heading">Exclusive Support</p>
                <p className="text1">We can help you find available vaccine appointments near you or notify you when availability</p>
              </li>
            </div>
        </div>
        <img className='img' src = {dr} alt ="doctor"/>
        
    </div>
  )
}

export default WhyChooseUs