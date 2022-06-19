import { React, useEffect, useRef, useState, useContext } from "react";
import Peer from "simple-peer";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "../../context/Context";
import "./VideoCall.css";
import defaultImage from "../../../src/images/default-image.png";
import { Socket } from "socket.io-client";

const VideoCall = () => {
  
  const [searchParams] = useSearchParams();
  const did = searchParams.get("did");
  const pid = searchParams.get("pid");
  console.log(did , pid);
  
  const [mute , setMute] = useState(false);
  const [mediaStream,setMediaStream] = useState(null);
  const [isCamOn , setIsCamOn] = useState(true); 
  const [isCamOff , setIsCamOff] = useState(false); 
  const [isAudioOn , setIsAudioOn] = useState(false);
  const [isAudioOff , setIsAudioOff] = useState(true);
  const [videoTag,setVideoTag] = useState();
  const {userData , name, callAccepted, myVideo, userVideo, callEnded, stream, call,leaveCall,socket , cameraOff,setCameraOff} = useContext(AppContext);
  
  useEffect(() => {
    const func = async () => {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      const video = document.querySelector(".myVideo");
      console.log(video);
      video.srcObject = mediaStream;
      setMediaStream(mediaStream);
      setVideoTag(video);
    };
    func();
  }, []);
  
  
  const turnCameraOff = async() => {
    const video = document.querySelector(".myVideo");
    video.srcObject = null;
    let data = pid;
    if(pid === userData._id)
      data = did;
    socket.emit("cameraOff",{isOff:true , data});
    setIsCamOn(false); 
    setIsCamOff(true)  
  }

  const turnCameraOn = async() => {
    const video = document.querySelector(".myVideo");
    video.srcObject = mediaStream;
    let data = pid;
    if(pid === userData._id)
      data = did;
    socket.emit("cameraOff",{isOff:false , data});
    setIsCamOn(true);
    setIsCamOff(false);
  }
  
  const leave = () => {
    leaveCall();
  }

  const turnMicOff = () => {
    
  }
  
  const turnMicOn = () => {  
   
  }
  
  return (
    <div className="videocall-container">
      <div className="heading">
        <span className="medi">Medi</span>
        <span className="nice">Nice</span>
      </div>
      <div className="video-container">
        
          <div className={`video user ${!cameraOff && callAccepted && !callEnded ? "" : "hidden"}`}>
            {
              <video
                playsInline
                ref={userVideo}
                autoPlay
                style={{ width: "100%" }}
              />
            }
          </div>
         
          <div className={`video my-user ${!cameraOff && callAccepted && !callEnded ? "" : "hidden"}`}>
            <img src={defaultImage} alt="default" className="default" />
          </div>
        
        
        <div className={`video my me ${isCamOn === false ? "hidden" : ""}`}>
           <video className="myVideo" playsInline autoPlay></video>
        </div>
        <div className={`video my-user ${isCamOn ? "hidden" : ""}`}>
          <img src={defaultImage} alt="default" className="default" />
        </div>
        
      </div>
      <div className="buttons">
        <div className={`butt `}>
          <i
            className={`fa fa-solid fa-microphone ${isAudioOn ? "" : "hidden"}`}
            style={{ fontSize: "20px", color: "#162D55" }}
            onClick={(e) => (
              turnMicOn(e), setIsAudioOn(true), setIsAudioOff(false)
            )}
          ></i>
          <i
            className={`fa fa-solid fa-microphone-slash ${
              isAudioOff ? "" : "hidden"
            }`}
            style={{ fontSize: "20px", color: "#162D55" }}
            onClick={(e) => (
              turnMicOff(e), setIsAudioOn(false), setIsAudioOff(true)
            )}
          ></i>
        </div>
        {/* <div className={`butt`} onClick={(e) => {micOff(e)}}>
        </div> */}
        <div className={`butt`}>
          <i
            className={`fa fa-solid fa-video ${isCamOn ? "" : "hidden"}`}
            style={{ fontSize: "20px", color: "#162D55" }}
            onClick={(e) => (turnCameraOff())}
          ></i>
          <i
            className={`fa fa-solid fa-video-slash ${isCamOff ? "" : "hidden"}`}
            style={{ fontSize: "20px", color: "#162D55" }}
            onClick={(e) => (
              turnCameraOn()
            )}
          ></i>
        </div>
        {/* <div className={`butt`} onClick={(e) => {cameraOff(e)}}>
        </div> */}
        <div className={`butt`} onClick={(e) => leave(e)}>
          <i
            className="fas fa-phone-slash"
            style={{ fontSize: "20px", color: "#162D55" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
