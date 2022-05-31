import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer" id = 'contactus'>
        {/* <div className="line">

        </div> */}
        <div className="footer-container">
            <div className="text-container">
                <div className="heading">
                    <p className="heading-text">Medinice</p>
                </div>
                <div className="text">
                    <p>268 Elizabeth Road, Broklyn</p>
                    <p>2390, USA</p>
                    <p>+91 44444-44444</p>
                    <p>contactsupport@gmail.com</p>
                </div>
                <div className="icons">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-solid fa-envelope"></i>
                    <i className="fa-brands fa-linkedin"></i>
                </div>
            </div>
            <div className="second">
                <div className="heading">
                    <p className="heading-text">Links</p>
                </div>
                <div className="options">
                    <p>About Us</p>
                    <p>Our Gallery</p>
                    <p>Appointment</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
            <div className="third">
                <div className="heading">
                    <p className="heading-text">Department</p>
                </div>
                <div className="options">
                    <p>Orthology</p>
                    <p>Neurology</p>
                    <p>Dental Core</p>
                    <p>Cardiology</p>
                </div>
            </div>
            <div className="fourth">
                <div className="heading">
                    <p className="heading-text">Opening Hours</p>
                </div>
                <div className="options">
                    <p>Mon - Tues  8am - 5pm</p>
                    <p>Wed - Thu   9am - 6pm</p>
                    <p>Fri - Sat   8am - 5pm</p>
                    <p>Sunday      Emergency Only</p>
                </div>
            </div>
        </div>
        {/* <div className="line">

        </div> */}
    </div>
)};

export default Footer;