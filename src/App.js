import {React , useContext, useState} from "react";
import { useEffect } from 'react';
import { Route,Routes,Navigate} from 'react-router-dom';
import Home from "./pages/home/Home.js";
import Signup from "./pages/authentication/signup/Signup.js";
import Login from "./pages/authentication/login/Login.js";
import ContactUs from "./pages/ContactUs/ContactUs.js";
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
import VideoCall from "./pages/VideoCall/VideoCall.js"

import { AppContext } from "./context/Context";
import { addPendingRequest, getDoctor , addPatUpcomingAppt } from "./services/Api.js";


function App() {

  const {
    userData,
    requestedAppt,
    setrequestedAppt,
    patUpcomingAppt,
    setPatUpcomingAppt,
    setDoctorSignal,
    setReceivingDoctorCall,
    socket,
    setSocket,
    myPeer,
    userVideo,
    setMyPeer
  } = useContext(AppContext);
  
  // useEffect(()=>{
  //   if(!myPeer)
  //     return;
  //   myPeer.on('stream', (currentStream) => {
  //     userVideo.current.srcObject = currentStream;
  //   });
  // })

  useEffect(()=>{
    
    if(socket === null){
      return;
    }else{
      if(userData)
        // socket.emit("setup",{sender:userData});
        socket.on("appointmentreq",({patient})=>{
          const obj = {
            pid : patient?._id,
            did : userData?._id
          }
          const addPending = async () => {
             const data = await addPendingRequest(obj);
             setrequestedAppt([...requestedAppt,data?.data?.data.pendingRequests]);
          }
          addPending();
        })
        socket.on("reqaccept",({info,pid,did,name}) => {
          const obj = {
            time: info.time,
            date: info.date,
            pid: pid,
            did: did,
            name: name
          }
          console.log(obj);
          const addPatientUpcoming = async () => {
            const data = await addPatUpcomingAppt(obj);
            console.log(data);
          }
          addPatientUpcoming();
        })
        socket?.on("userCall" , ({pid, signalData, did}) => {
          console.log(`${did} is calling`);
          setDoctorSignal(signalData);
          setReceivingDoctorCall(true);
        })
    }
  },[socket]);
  
  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<><Navbar /><Home /><Footer/></>} />
          <Route path="login" element={userData?<Navigate to = "/"/>:<><Login/><Footer/></>} />
          <Route path="register" element={userData?<Navigate to = "/"/>:<><Signup /><Footer/></>} />
          <Route path="contact" element = {<><Navbar /><ContactUs /><Footer/></>} />
          <Route path="doctor" element={userData?.designation==="doctor"?<><Navbar /><DoctorProfile/><Footer /></>:<Navigate to ="/"/>} />
          <Route path="patient" element={userData?.designation==="patient"? <><Navbar /><PatientProfile/><Footer/></> : <Navigate to = "/"/>} />
          <Route path="admin" element={<><Navbar /><AdminProfile /><Footer/></>} />
          <Route path="patientlandingpage" element={userData?.designation==="patient"?<><Navbar /><PatientLandingPage/><Footer/></>:<Navigate to = "/"/>}/>
          <Route path="doctordetailview/:id" element={userData?.designation==="patient"?<><Navbar /><DoctorDetailView/><Footer/></> :<Navigate to = "/"/>} />
          <Route path="patientdetailview" element={<><Navbar /><PatientDetailView /><Footer /></>} />
          <Route path="doctor/:id" element={<><Navbar /><EditDoctorProfile /><Footer/></>} />
          <Route path="appointment" element={<VideoCall socket={socket}/>} />
          <Route path="patient/:id" element={userData?.designation==="patient"?<><Navbar /><EditPatientProfile /><Footer/></> :<Navigate to = "/"/>} />
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;