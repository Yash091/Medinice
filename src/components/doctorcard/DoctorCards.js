import React from 'react'
import DoctorCard from './DoctorCard'
import "./DoctorCards.css"
const DoctorCards = (props) => {
  return (
    <div className='doctor-cards-container'>
        {
          props.doctors.map((elem) => {return <DoctorCard name={elem.name} speciality={elem.speciality} id={elem._id} picture={elem.picture}/> })
        }
    </div>
  )
}

export default DoctorCards