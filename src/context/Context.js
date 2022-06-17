import React, { useContext, useEffect, useState,useRef } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import Peer from "simple-peer";

export const AppContext = createContext();

const Context = ({ children }) => {

  const navigate = useNavigate();
  const initial = JSON.parse(window.localStorage.getItem("user"));
  const [userData, setUserData] = useState(initial);
  const [requestedAppt, setrequestedAppt] = useState([]);
  const [upcomingAppt, setUpcomingAppt] = useState([]);
  const [patUpcomingAppt, setPatUpcomingAppt] = useState([]);
  const [pastAppt, setPastAppt] = useState([]);
  const [patPastAppt, setPatPastAppt] = useState([]);
  const [receivingDoctorCall, setReceivingDoctorCall] = useState(false);
  const [doctorSignal, setDoctorSignal] = useState();
  const [socket,setSocket] = useState(null);
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState('');
  const [call, setCall] = useState({});
  const [me, setMe] = useState(''); 
  const [myPeer,setMyPeer] = useState(null);
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  window.onbeforeunload = (event) => {
    
    if (connectionRef.current) {
      connectionRef.current.destroy();
      socket.emit("disconnect");
      console.log("Hey it's here")
    }
  };
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        // console.log(currentStream);
        // myVideo.current.srcObject = currentStream;
       
      });
      
    socket?.on('me', (id) => setMe(id));

    socket?.on('callUser', ({ from, name: callerName, signal }) => {
      console.log("Someone is Calling....")
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
  },[socket]);

  useEffect(() => {
    if(!socket)
      setSocket(io("http://localhost:8000"));
    const data = JSON.parse(window.localStorage.getItem("user"));
    // if(!data)
    //   navigate("/");
    // else
    setUserData(data);
  }, [navigate]);

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });
    // setMyPeer(peer);
    // myVideo.current.srcObject = stream;
    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: call.from });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const callUser = ({id,me,name}) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });
    console.log(peer);
    // setMyPeer(peer);
    peer.on('signal', (data) => {
      socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);

    connectionRef.current.destroy();
    socket.emit("disconnect");
    window.location.reload();
  };

  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
        requestedAppt,
        setrequestedAppt,
        upcomingAppt,
        setUpcomingAppt,
        pastAppt,
        setPastAppt,
        patUpcomingAppt,
        setPatUpcomingAppt,
        patPastAppt,
        setPatPastAppt,
        receivingDoctorCall,
        setReceivingDoctorCall,
        doctorSignal, 
        setDoctorSignal,
        callAccepted,
        setCallAccepted,
        socket,
        setSocket,
        callEnded,
        setCallEnded,
        name,
        setName,
        call,
        setCall,
        myVideo,
        userVideo,
        stream,
        setStream,
        me,
        setMe,
        callUser,
        leaveCall,
        answerCall,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;
