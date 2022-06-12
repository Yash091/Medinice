import React,{useState, useEffect, useContext} from 'react'
import "./DoctorDetailView.css";
import doc from "../../../images/default-image.png"
import { useParams } from 'react-router-dom';
import { getDoctor } from '../../../services/Api';
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { AppContext } from '../../../context/Context';

const DoctorDetailView = ({socket}) => {
  
  const {id} = useParams();
  const [doctor,setDoctor] = useState({});
  const {userData} = useContext(AppContext);
  useEffect(() => {
    
    const getDoctorDetail = async () => {
        const data = await getDoctor(id);
        // console.log(data.data[0]);
        if(data?.data)
          setDoctor(data.data[0]);
    }
    getDoctorDetail();
  }, [])
  
  // console.log(doctor);
  
  const bookAppointment = () => {
    // console.log("getappointment",socket);
    socket.emit("getappointment",{id,userData});
  }

  return (
    <div className='detailview-container'>
      <div className = 'profile-text'>Profile</div>
        <div className='main-container'>
            <div className='left-container'>
              <img src={doctor.picture||doc} alt="doc-img" />
              <div className='doc-name'>Dr. {doctor.name}</div>
              <div className='book-appointment' onClick={()=>bookAppointment()}><button>Book an Appointment</button></div>
            </div>
            <div className='right-container'>
              <div className='profile'> 
                <div className='head-text'>
                  Profile
                </div>
                <div className='doctor-name'>
                   Dr. {doctor.name}
                </div>
                <div className='doc-qualification'>
                  MBBS
                </div>
              </div>

              <div className='speciality'>
                <div className='speciality-text'>
                  Speciality
                </div>
                <p></p>
                <p>{doctor.speciality}</p>
              </div>

              <div className='exp'>
                <div className='exp-text'>
                  Experience
                </div>
                <p>{doctor.experience} Years</p>
              </div>

              <div className='contact'>
                <div className='contact-text'>
                  Contact
                </div>
                <p>{doctor.mobile}</p>
              </div>

              <div className ='address'>
                <div className = 'address-text'>
                  Address
                </div>
                <p>{doctor.address}</p>
              </div>

            </div>
        </div>
    </div>
  )
}

export default DoctorDetailView;