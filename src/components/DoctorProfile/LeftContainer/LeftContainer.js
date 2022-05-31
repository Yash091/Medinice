import {React , useContext, useEffect , useState} from 'react'
import "./leftcontainer.css";
import defaultPic from "../../../images/default-image.png"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { AppContext } from '../../../context/Context';
import {useNavigate} from "react-router-dom";

const LeftContainer = () => {

  const navigate = useNavigate();
  const [doc , setDoc] = useState({});
  const {userData} = useContext(AppContext);
  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("user"));
    if(data) {
      setDoc(data);
      
    }
  }, [])

  const handleEdit = (e) => {
    navigate(`/doctor/${userData._id}`);
  }

  return (
    <div className="doc-left-container">
      <div className="img-container">
        {/* <img src= alt="doc-pic" /> */}
        <Avatar size='2xl' name={userData?.name}  style={{background: "white" , border: "2px solid black"}} src={userData?.picture} />
      </div>
      <div className="name">
        {userData?.name} 
      </div>
      <div className="speciality">
        {userData?.speciality} 
      </div>
      <div className="experience">
        {userData?.experience} years experience
      </div>
      <div className="description">
        <span>About</span>
        <p>wdfkjewkledfwdefhnwjdn wsdjfkndf shwdbnsmdn swdkjnswd shdsndwsd kdefjdf</p>
      </div>
      <div className="edit">
        <Button colorScheme='teal' variant='solid' style={{marginTop: "2rem" , background: "#2AA7FF"}} onClick={(e)=>handleEdit(e)}>
          Edit Profile
        </Button>
      </div>
    </div>
  )
}

export default LeftContainer