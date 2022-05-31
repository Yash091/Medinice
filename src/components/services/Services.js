import React from 'react'
import "./Services.css"
import image1 from '../../images/search.png'
import image2 from '../../images/docprofile.png'
import image3 from '../../images/calender.png'
import image4 from '../../images/solution.png'

const Services = () => {
  return (
    <div className="services-container" id = 'services'>
        <div className='service-head'>
            Our Services
        </div>
        <div className = 'service-desc'>
            Services for your health
        </div>
        <div className="options">
            <li className="item">
                <i className="fa-solid fa-magnifying-glass"></i>
                <img className="img" src={image1} alt="doctor" />
                <p className="heading">Search Doctor</p>
                <p className="text1">We're here to help whenever you feel ill, but keeping you healthy is our better priority</p>
            </li>
            <li className="item">
                <i className="fa-solid fa-user-doctor"></i>
                <img className="img" src={image2} alt="profile" />
                <p className="heading">Check Doctor Profile</p>
                <p className="text1">We can help you find available vaccine appointments near you or notify you when availability</p>
            </li>
            <li className="item">
                <i className="fa-solid fa-calendar-lines-pen"></i>
                <img className="img" src={image3} alt="calender" />
                <p className="heading">Schedule Appointment</p>
                <p className="text1">From seasonal allergies to burn identification and treatments, we have the resources.</p>
            </li>
            <li className="item">
                <i className="fa-solid fa-hands-holding-heart"></i>
                <img className="img" src={image4} alt="solution" />
                <p className="heading">Get Your Solution</p>
                <p className="text1">We can help you find available vaccine appointments near you or notify you when availability.</p>
            </li>
        </div>
    </div>
  )
}

export default Services