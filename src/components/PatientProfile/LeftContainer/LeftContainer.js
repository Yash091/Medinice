import {React , useContext, useEffect , useState} from 'react'
import "./leftcontainer.css";
import { Button} from '@chakra-ui/react'
import { AppContext } from '../../../context/Context';
import {useNavigate} from "react-router-dom";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

const LeftContainer = () => {

  const navigate = useNavigate();
  const [pat , setPat] = useState({});
  const {userData} = useContext(AppContext);
  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("user"));
    // console.log(data);
    if(data) {
      setPat(data);
      console.log(data);
    }
  }, [])

  const handleEdit = (e) => {
    navigate(`/patient/${userData._id}`);
  }

  return (
    <div className="patient-left-container">
      <div className="img-container">
        <Avatar size='2xl' name={userData?.name}  style={{background: "white" , border: "2px solid black"}} />
      </div>
      <div className="name">
        {userData?.name} 
      </div>
      <div className = "age">
        {userData?.age}
      </div>
      {/* <div className="speciality">
        {userData?.speciality} 
      </div>
      <div className="experience">
        {userData?.experience} years experience
      </div>
      <div className="description">
        <span>About</span>
        <p>wdfkjewkledfwdefhnwjdn wsdjfkndf shwdbnsmdn swdkjnswd shdsndwsd kdefjdf</p>
      </div> */}
      <div className="edit">
        <Button  colorScheme='teal' variant='solid' style={{marginTop: "2rem" , background: "#2AA7FF"}} onClick={(e)=>handleEdit(e)}>
          Edit Profile
        </Button>
      </div>
    </div>
  )
}

export default LeftContainer