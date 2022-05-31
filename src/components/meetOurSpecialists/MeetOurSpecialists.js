import React from 'react'
import "./MeetOurSpecialists.css"
import doctor from '../../images/dr.png'

const MeetOurSpecialists = () => {
  return (
    <div className='meet-specialists-container' id='meet-team'>
        <div className='specialists-head'>
            Meet Our Specialists
        </div>
        {/* <div className = 'specialists-desc'>
            Meet Our Team
        </div> */}
        <div className = 'specialists-sub-desc'>
            <div>Our Expert Team is made up of creatives with technical knowledge, strategies and lot of expericence.</div>
            <div>Get the best treatment from our expert team members.</div>
        </div>
        <div className="options">
            <li className="item">
                <img className="img" src={doctor} />
                <div>
                  <p className="heading">Harriet Watson</p>
                  <p className="text1">Cardiologist</p>
                </div>
            </li>
            <li className="item">
                <img className="img" src={doctor} />
                <div>
                  <p className="heading">John Wick</p>
                  <p className="text1">Neurologist</p>
                </div>
            </li>
            <li className="item">
                <img className="img" src={doctor} />
                <div>
                  <p className="heading">David Miller</p>
                  <p className="text1">Dietician</p>
                </div>
            </li>
        </div>
    </div>
  )
}

export default MeetOurSpecialists