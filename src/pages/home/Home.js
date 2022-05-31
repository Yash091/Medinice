import React from 'react';
import './Home.css';
import dr from "../../images/dr.png";
import WhyChooseUs from '../../components/whychooseus/WhyChooseUs';
import Service from "../../components/services/Services";
import MeetOurSpecialists from "../../components/meetOurSpecialists/MeetOurSpecialists";
import { HashLink } from 'react-router-hash-link';

const Home = () => {
  return (
    <div className="home-container">
        <div className='top-container'>
            <div className='desc'>
                <div className='text'>Dedicated to Hope, Healing and Recovery</div>
                <div className='sub-desc'>
                    There are many variations of passages of Ipsum available, but the majority have suffered.
                </div>
                <HashLink to='#meet-team'>
                    <button className='meet-specialist'>
                        Meet our Specialist
                    </button>
                </HashLink>
            </div>
            <img src = {dr} alt = "Doctor"/>
        </div>
        <div>
            <Service />
        </div>
        <MeetOurSpecialists />
        <WhyChooseUs/>
    </div>
  )
}

export default Home;