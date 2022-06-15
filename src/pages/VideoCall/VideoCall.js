import { React, useEffect, useRef , useState , useContext } from "react";
import Peer from "simple-peer";
import { useSearchParams } from 'react-router-dom'
import { AppContext } from "../../context/Context";

const VideoCall = () => {
  
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(AppContext);
  useEffect(()=>{
      const func = async() =>{
        const mediaStream = await navigator.mediaDevices.getUserMedia({video: true});
        const video = document.querySelector('.myVideo');
        video.srcObject = mediaStream;
      }
      func();
  },[])  
  return (
    <div className="videocall-container">
      Meeting started
      <div className="video-container">
        { 
        callAccepted?
        <div className="video">
					{<video playsInline ref={userVideo}autoPlay style={{ width: "300px" }}/>}
				</div>:<div>hii</div>
        }
        <div className="video">
          <video className="myVideo" playsInline autoPlay></video>
        </div>
        {/* <div className="video">
          {stream && <video playsInline ref={myVideo} autoPlay style={{ width: "300px"}} />}
        </div> */}
{/*       
        {
          callAccepted?
          <div className="video">
          {<video playsInline ref={myVideo} autoPlay style={{ width: "300px"}} />}
          </div>:<div>Nobody joined</div>
        } */}
      </div>
    </div>
  );
};

export default VideoCall;


// import React, { useContext } from 'react';
// import { AppContext } from "../../context/Context";

// const VideoCall = () => {
//   const classes ={};
//   return (
//     <>
//       {stream && (
//             <video playsInline muted ref={myVideo} autoPlay 
//             />
//       )}
//       <h1>
//         Meeting Started
//       </h1>
//       {callAccepted && !callEnded && (
//             <video playsInline ref={userVideo} autoPlay className={classes.video} />
//       )}
//     </>
//   );
// };

// export default VideoCall;