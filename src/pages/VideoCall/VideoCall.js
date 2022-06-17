import { React, useEffect, useRef, useState, useContext } from "react";
import Peer from "simple-peer";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "../../context/Context";
import "./VideoCall.css";

const VideoCall = () => {
  
  const [mute , setMute] = useState(false);
  const [mediaStream,setMediaStream] = useState(null);
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call,leaveCall } = useContext(AppContext);
  useEffect(() => {
    const func = async () => {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      const video = document.querySelector(".myVideo");
      // const video1 = document.querySelector(".myVideo1");
      video.srcObject = mediaStream;
      // video1.srcObject = mediaStream;
      setMediaStream(mediaStream);
      
    };
    func();
  }, []);
  
  const cameraOff = async(e) => {
    const video = document.querySelector(".myVideo");
    console.log(video.srcObject);
    video.srcObject = null;
    
  }
  const cameraOn = async() => {
    const video = document.querySelector(".myVideo");
    console.log(video.srcObject);
    video.srcObject = mediaStream;
  }
  
  const leave = (e) => {
    e.preventDefault();
    console.log("leave");
    leaveCall();
  }
  
  return (
    <div className="videocall-container">
      <div className="heading">
        <span className="medi">Medi</span>
        <span className="nice">Nice</span>
      </div>
      <div className="video-container">
        {callAccepted && !callEnded ? (
          <div className="video user">
            {
              <video
                playsInline
                ref={userVideo}
                autoPlay
                style={{ width: "300px" }}
              />
            }
          </div>
        ) : (
          <div className="video my user">
            {/* <video className="myVideo1" playsInline autoPlay></video> */}
          </div>
        )}
        <div className="video my me">
          <video className="myVideo" playsInline autoPlay></video>
        </div>
        {/*       
        {
          callAccepted?
          <div className="video">
          {<video playsInline ref={myVideo} autoPlay style={{ width: "300px"}} />}
          </div>:<div>Nobody joined</div>
        } */}
      </div>
      <div className="buttons">
        <div className="butt">
          <i className="fa fa-solid fa-microphone" style={{fontSize: "20px" , color : "#162D55"}}></i>
        </div>
        <div className="butt">
          <i className="fa fa-solid fa-microphone-slash" style={{fontSize: "20px" , color : "#162D55"}}></i>
        </div>
        <div className="butt">
          <i className="fa fa-solid fa-video" style={{fontSize: "20px" , color : "#162D55"}} onClick={()=>{cameraOn()}}></i>
        </div>
        <div className="butt">
          <i className="fa fa-solid fa-video-slash" style={{fontSize: "20px" , color : "#162D55"}} onClick={(e) => {cameraOff(e)}}></i>
        </div>
        <div className="butt" >
          <i className='fas fa-phone-slash' style={{fontSize:"20px",color:"#162D55"}} onClick={(e) => leave(e)}></i>
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
