import React from 'react'
import "./DoctorCard.css"
import doc from "../../images/dr.png"
import {Link} from "react-router-dom";

const DoctorCard = (props) => {
  // console.log(props,"from doctor card");
  return (
    <Link to={`/doctordetailview/${props.id}`}>
      <div className="card-container">
          <img src = {props.picture || doc} className='doctor-pic' alt='doctor-pic'/>
          <div>
          <div className='doctor-name'>{props.name}</div>
          <div className='speciality'>{props.speciality}</div>
          </div>
      </div>
    </Link>
  )
}

export default DoctorCard