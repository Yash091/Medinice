import {React , useContext, useState} from "react";
import { useEffect } from 'react';
import { Route,Routes,Navigate} from 'react-router-dom';
import Home from "./pages/home/Home.js";
import Signup from "./pages/authentication/signup/Signup.js";
import Login from "./pages/authentication/login/Login.js";
import Navbar from './components/navbar/Navbar';
import Footer from "./components/footer/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import DoctorProfile from "./pages/ProfilePages/Doctor/DoctorProfile.js";
import PatientProfile from "./pages/ProfilePages/Patient/PatientProfile.js"
import AdminProfile from "./pages/ProfilePages/Admin/AdminProfile.js";
import PatientLandingPage from './pages/LandingPages/patientlandingpage/PatientLandingPage';
import DoctorCard from './components/doctorcard/DoctorCard';
import DoctorCards from './components/doctorcard/DoctorCards';
import EditDoctorProfile from "./pages/ProfilePages/Doctor/EditProfile/EditDoctorProfile.js";
import DoctorDetailView from './pages/detailView/DoctorDetailView/DoctorDetailView.js';
import PatientDetailView from "./pages/detailView/PatientDetailView/PatientDetailView";
import EditPatientProfile from "./pages/ProfilePages/Patient/EditProfile/EditPatientProfile.js";
import {io} from "socket.io-client"
import { AppContext } from "./context/Context";

function App() {

  const [socket,setSocket] = useState(null);
  const {userData, requestedAppt,setrequestedAppt} = useContext(AppContext);
  
  useEffect(()=>{    
    
    if(socket === null){
      setSocket(io("http://localhost:8000"));
      
    }else{
      
      if(userData)
        socket.emit("setup",{sender:userData});
        socket.on("appointmentreq",({userData})=>{
          console.log(userData);
          setrequestedAppt([...requestedAppt,{id:userData._id, name:userData.name, mobile:userData.mobile, email:userData.email}]);
        })
    }
  },[socket]);

  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={userData?<Navigate to = "/"/>:<Login/>} />
          <Route path="register" element={userData?<Navigate to = "/"/>:<Signup />} />
          <Route path="doctor" element={userData?.designation==="doctor"?<DoctorProfile />:<Navigate to ="/"/>} />
          <Route path="patient" element={userData?.designation==="patient"? <PatientProfile /> : <Navigate to = "/"/>} />
          <Route path="admin" element={<AdminProfile />} />
          <Route path="patientlandingpage" element={userData?.designation==="patient"?<PatientLandingPage/>:<Navigate to = "/"/>}/>
          {/* <Route path="doctorcard" element={<DoctorCard/>}/>
          <Route path="doctorcards" element={<DoctorCards />}/> */}
          <Route path="doctordetailview/:id" element={userData?.designation==="patient"?<DoctorDetailView socket={socket}/> :<Navigate to = "/"/>} />
          <Route path="patientdetailview" element={<PatientDetailView />} />
          <Route path="doctor/:id" element={<EditDoctorProfile />} />
          <Route path="patient/:id" element={userData?.designation==="patient"?<EditPatientProfile /> :<Navigate to = "/"/>} />
        </Routes>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;
